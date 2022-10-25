<script setup>
import './style'
import { toRefs } from 'vue'
const props = defineProps({
  tableFilter: {
    type: Array,
    default: () => {
      return []
    },
  },
})
const { tableFilter } = toRefs(props)
</script>

<template>
  <div class="tableFilterMain">
    <el-form :inline="true" class="table-filter">
      <div class="tableFilterCon">
        <el-form-item v-for="(item, index) in tableFilter" :key="index" :label="item.label">
          <el-input
            v-if="item.type === 'input'"
            v-model="item.inputModel"
            :placeholder="item.placeholder || '请输入'"
            :disabled="item.disabled"
            style="width: 100%"
          />
          <el-select v-if="item.type === 'select'" v-model="item.selectModel" placeholder="请选择" style="width: 100%">
            <el-option
              v-for="option in item.selectOptions"
              :key="option.id"
              :label="option.label"
              :value="option.value"
            />
          </el-select>
          <el-date-picker
            v-if="item.type === 'date'"
            v-model="item.dateModel"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="YYYY-MM-DD"
            :clearable="false"
            style="width: 100%"
          />
          <el-date-picker
            v-if="item.type === 'dateMonth'"
            v-model="item.dateMonthModel"
            type="month"
            placeholder="请选择"
            value-format="YYYY-MM"
            style="width: 100%"
          />
          <el-date-picker
            v-if="item.type === 'dateDay'"
            v-model="item.dateDayModel"
            placeholder="请选择"
            value-format="YYYY-MM-DD"
            style="width: 100%"
          />
          <div class="opButtonsWrap">
            <template v-for="(btnItem, btnIndex) in item.opButtons" :key="btnIndex">
              <el-button v-if="btnItem.type === 'searchButton'" type="primary" @click="btnItem.click(tableFilter)">
                {{ btnItem.name }}
              </el-button>
              <el-button v-if="btnItem.type === 'refreshButton'" type="warning" @click="btnItem.click(tableFilter)">
                {{ btnItem.name }}
              </el-button>
            </template>
          </div>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
