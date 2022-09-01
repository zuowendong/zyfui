<template><div><h1 id="zyf-number-range" tabindex="-1"><a class="header-anchor" href="#zyf-number-range" aria-hidden="true">#</a> zyf-number-range</h1>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<table>
<thead>
<tr>
<th>名称</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>modelValue</td>
<td style="text-align:left">数字范围，[min, max]</td>
<td style="text-align:left">array</td>
</tr>
<tr>
<td>disabled</td>
<td style="text-align:left">是否禁用，默认false</td>
<td style="text-align:left">boolean</td>
</tr>
<tr>
<td>precision</td>
<td style="text-align:left">精度，默认整数</td>
<td style="text-align:left">number</td>
</tr>
</tbody>
</table>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>zyf-number-range</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>numberRange<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">let</span> numberRange <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


