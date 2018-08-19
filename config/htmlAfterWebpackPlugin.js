const pluginName = "htmlAfterWepackPlugin";
// 预制对象方便插入
const asssetsHelp = (data) => {
  let css = [], js = [];
  // 字典
  const dictionary = {
    js: item => `<script src="${item}"></script>`,
    css: item => `<link rel='stylesheet' href="${item}"></link>`
  }
  for (let jsitem of data.js) {
    js.push(dictionary.js(jsitem))
  }
  for (let cssitem of data.css) {
    css.push(dictionary.css(cssitem))
  }
  return {
    css,
    js
  }
}
// 自己写个htmlwebpackPlugin
class HtmlAfterWepackPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(pluginName, compilation => {
      compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(pluginName, htmlPluginData => {
        let _html = htmlPluginData.html;
        const result = asssetsHelp(htmlPluginData.assets);
        _html = _html.replace("<!--injectcss-->", result.css.join(""))
        _html = _html.replace("<!--injectjs-->", result.js.join(""))
        htmlPluginData.html = _html;
      })
    });
  }
}

module.exports = HtmlAfterWepackPlugin;