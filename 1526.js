"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[1526],{1526:(n,e,a)=>{a.r(e),a.d(e,{default:()=>t});const t="class Random < Liquid::Block\n  def initialize(tag_name, markup, tokens)\n     super\n     @rand = markup.to_i\n  end\n\n  def render(context)\n    value = rand(@rand)\n    super.sub('^^^', value.to_s)  # calling `super` returns the content of the block\n  end\nend\n\nLiquid::Template.register_tag('random', Random)\ntext = \" {% random 5 %} you have drawn number ^^^, lucky you! {% endrandom %} \"\n@template = Liquid::Template.parse(text)\n@template.render  # will return \"you have drawn number 1, lucky you!\" in 20% of cases\n"}}]);
//# sourceMappingURL=1526.js.map