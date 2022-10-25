<script setup>
import './style'
import { onMounted, ref, toRefs, watch } from 'vue'
import ZyfTableFilter from './TableFilter.vue'

const props = defineProps({
  fetch: {
    type: [Function, Array],
    default: () => {
      return []
    },
  },
  fetchParams: {
    type: Object,
    default: () => {
      return {}
    },
  },
  tableLayer: {
    type: Array,
    default: () => {
      return []
    },
  },
  formatFetchData: {
    type: Function,
    default: (list) => {
      return list.map(item => item)
    },
  },
  tableFilter: {
    type: [Function, Array],
    default: () => {
      return []
    },
  },
  tableRowClassName: {
    type: Function,
    default: () => {},
  },
  showTableSelection: { type: Boolean, default: false },
  showTableIdx: { type: Boolean, default: false },
  showFooter: { type: Boolean, default: true },
})

const {
  fetch,
  fetchParams,
  formatFetchData,
  tableLayer,
  tableFilter,
  showTableSelection,
  showTableIdx,
  showFooter,
  tableRowClassName,
} = toRefs(props)
const emit = defineEmits(['selection-change'])

const handleSelectionChange = (val) => {
  emit('selection-change', val)
}

/**
 * alias为数组格式的情况判断
 */
const arrAlias = () => {
  const arr = []
  for (let i = 0; i < arguments.length; i++)
    arr.push(i)

  return arr
}

/**
 * 处理下拉接口数据
 * filterDataItem = {
 * 	fetch // 接口api
 *  fetchParams // 接口传参
 *  labelAlias //下拉框选项展示名称
 *  valueAlias //下拉框选项值
 * }
 */
const selectDataFormat = (item, data) => {
  data = data.map((dataItem) => {
    return {
      label: Array.isArray(item.labelAlias)
        ? arrAlias(item.labelAlias)
          .map((labelItem) => {
            return `${dataItem[item.labelAlias[labelItem]]}`
          })
          .toString()
        : dataItem[item.labelAlias],
      value: Array.isArray(item.valueAlias)
        ? arrAlias(item.valueAlias)
          .map((valueItem) => {
            return `${dataItem[item.valueAlias[valueItem]]}`
          })
          .toString()
        : dataItem[item.valueAlias],
    }
  })
  data.unshift({ label: '全部', value: item.initModel ?? 0 })
  return data
}

const getFilterData = async() => {
  if (tableFilter.value.length) {
    for (let i = 0; i < tableFilter.value.length; i++) {
      const item = tableFilter.value[i]

      // select API
      if (item.fetch) {
        const queryParam = item.fetchParams || {}
        let { data } = await item.fetch(queryParam)
        if (data) {
          data = data.list ?? data
          if (item.fetchFormatFun) data = item.fetchFormatFun(data) // 处理请求数据结构
          item.selectOptions = selectDataFormat(item, data)
        }
        else {
          data = []
        }
      }
    }

    // op buttons
    tableFilter.value.push({
      opButtons: [
        {
          type: 'searchButton',
          name: '查询',
          click: (filterList) => {
            filterHandle(filterList)
            getTableData()
          },
        },
        {
          type: 'refreshButton',
          name: '重置',
          click: (filterList) => {
            refreshHandle(filterList)
            getTableData()
          },
        },
      ],
    })
  }
}

/**
 * 赋值 filterModels，接口参数
 */
const filterModels = ref([])
const filterHandle = (filterList) => {
  filterList.forEach((item) => {
    switch (item.type) {
      case 'date':
        if (item.dateModel !== null) {
          filterModels.value[item.startDateKey || 'startDate'] = item.dateModel[0]
          filterModels.value[item.endDateKey || 'endDate'] = item.dateModel[1]
        }
        else {
          filterModels.value[item.startDateKey || 'startDate'] = ''
          filterModels.value[item.endDateKey || 'endDate'] = ''
        }
        break

      case 'numberRange':
        filterModels.value[item.startKey] = item.selectModel[0]
        filterModels.value[item.endKey] = item.selectModel[1]
        break
    }

    if (!item.opButtons && item.type !== 'date')
      filterModels.value[item.field] = item[`${item.type}Model`]
  })
}

const tableData = ref([])
const pageSize = ref(10)
const pageNum = ref(1)
const total = ref(0)
const getTableData = async() => {
  // API
  if (Object.prototype.toString.call(fetch.value) === '[object Function]') {
    const baseData = {
      pageSize: showFooter.value ? pageSize.value : 9999,
      page: pageNum.value,
    }
    const res = await fetch.value({
      ...baseData,
      ...filterModels.value,
      ...fetchParams.value,
    })
    if (res.data) {
      total.value = res.data.total
      if (res.pageData)
        total.value = res.pageData.count || res.pageData.total

      const hasListKey = Object.keys(res.data).findIndex(item => item === 'list')
      if (hasListKey !== -1)
        tableData.value = res.data.list || []
			 else
        tableData.value = res.data
    }
    else {
      tableData.value = []
    }
  }
  else if (Array.isArray(fetch.value)) {
    // mockData
    tableData.value = fetch.value.slice((pageNum.value - 1) * pageSize.value, pageNum.value * pageSize.value)
    total.value = fetch.value.length
  }
  if (tableLayer.value.length && tableData.value.length)
    tableData.value = [...formatFetchData.value(tableData.value)]
}

const originTableFilter = ref([])
onMounted(() => {
  getFilterData()
  filterHandle(tableFilter.value)
  originTableFilter.value = JSON.parse(JSON.stringify(tableFilter.value))
  getTableData()
})

watch(
  () => props.fetch,
  () => {
    getTableData()
  },
  { deep: true },
)

const refreshHandle = (filterList) => {
  originTableFilter.value.forEach((item, index) => {
    if (item.type === 'date') {
      filterModels.value[item.startDateKey || 'startDate'] = item.dateModel[0] ?? ''
      filterModels.value[item.endDateKey || 'endDate'] = item.dateModel[1] ?? ''
    }
    else {
      filterModels.value[item.field] = item[`${item.type}Model`]
    }
    filterList[index][`${item.type}Model`] = item[`${item.type}Model`]
  })
}

// 分页
const pageNumChangeHandle = (val) => {
  pageNum.value = val
  getTableData()
}
const pageSizeChangeHandle = (val) => {
  pageSize.value = val
  getTableData()
}

/**
 * 列表单项宽度
 */
const getColumnWidth = (style) => {
  let widthObj = { width: null, minWidth: null }
  if (style) {
    if (style.width && !style.minWidth)
      widthObj = { width: style.width, minWidth: null }

    if (!style.width && style.minWidth)
      widthObj = { width: null, minWidth: style.minWidth }
  }
  else {
    widthObj = { width: null, minWidth: 100 }
  }
  return widthObj
}

const multipleTable = ref()
const table_clearSelection = () => {
  multipleTable.value && multipleTable.value.clearSelection()
}

defineExpose({ getTableData, tableData, table_clearSelection })
</script>

<template>
  <div class="zyfTableMain">
    <ZyfTableFilter v-if="tableFilter.length > 1" :table-filter="tableFilter" />
    <div class="tableContainer">
      <div class="buttonsWrap">
        <slot name="btn" />
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="light"
        header-cell-class-name="table-header-cell"
        :row-class-name="tableRowClassName"
        @selection-change="handleSelectionChange"
      >
        <el-table-column v-if="showTableSelection" type="selection" width="55" />
        <el-table-column v-if="showTableIdx" label="序号" :width="60">
          <template #default="{ $index }">
            <span>{{ $index + 1 + (pageNum - 1) * pageSize }}</span>
          </template>
        </el-table-column>

        <template v-if="tableLayer.length">
          <el-table-column
            v-for="(item, index) in tableLayer"
            :key="index"
            :label="item.label"
            :width="getColumnWidth(item.style).width"
            :min-width="getColumnWidth(item.style).minWidth"
            :align="item.style.align || 'left'"
          >
            <template #default="{ row }">
              <el-button v-if="item.event" link type="primary" @click="item.event(row)">
                {{ row[item.key] || item.key }}
              </el-button>
              <span v-else>{{ row[item.key] }}</span>
            </template>
          </el-table-column>
          <slot name="tableLayerOther" />
        </template>

        <slot v-else />
      </el-table>
      <div v-if="showFooter" class="footer">
        <el-pagination
          :current-page="pageNum"
          :page-size="pageSize"
          :page-sizes="[10, 20, 50, 100]"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="pageSizeChangeHandle"
          @current-change="pageNumChangeHandle"
        />
      </div>
    </div>
  </div>
</template>
