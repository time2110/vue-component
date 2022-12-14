export const options = {
    // 默认白名单参考 xss.whiteList
    whiteList: {
        a: ["target", "href", "title"],
        abbr: ["title"],
        address: [],
        area: ["shape", "coords", "href", "alt"],
        article: [],
        aside: [],
        audio: ["autoplay", "controls", "loop", "preload", "src"],
        b: [],
        bdi: ["dir"],
        bdo: ["dir"],
        big: [],
        blockquote: ["cite"],
        br: [],
        caption: [],
        center: [],
        cite: [],
        code: [],
        col: ["align", "valign", "span", "width"],
        colgroup: ["align", "valign", "span", "width"],
        dd: [],
        del: ["datetime"],
        details: ["open"],
        div: [],
        dl: [],
        dt: [],
        em: [],
        font: ["color", "size", "face"],
        footer: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        header: [],
        hr: ['style'],
        i: [],
        img: ["src", "alt", "title", "width", "height", "style", "contenteditable"],
        ins: ["datetime"],
        li: [],
        mark: [],
        nav: [],
        ol: [],
        p: ["style"],
        pre: [],
        s: [],
        section: [],
        small: [],
        span: ["style","contenteditable"],
        sub: [],
        sup: [],
        strong: [],
        strike: [],
        table: ["width", "border", "align", "valign", "style", "cellpadding", "cellspacing"],
        tbody: ["align", "valign"],
        td: ["width", "rowspan", "colspan", "align", "valign", "style"],
        tfoot: ["align", "valign"],
        th: ["width", "rowspan", "colspan", "align", "valign"],
        thead: ["align", "valign"],
        tr: ["rowspan", "align", "valign"],
        tt: [],
        u: [],
        ul: ['class'],
        video: ["autoplay", "controls", "loop", "preload", "src", "height", "width", "class", "style"],
        style: []   //新添
    },
    stripIgnoreTag: true, // 去掉不在白名单上的标签   true：去掉不在白名单上的标签
    stripIgnoreTagBody: ['script'] // 去掉不在白名单上的标签及标签体   ['tag1', 'tag2']：仅去掉指定的不在白名单上的标签
}
