
'use strict';

module.exports = { getRenderer };

function getRenderer ()
{
    var emojis = require('github-emoji-list')

    var validEmojis = emojis
    var validEmojiDictionary = {}
    for (var i in validEmojis) {
        var emojiName = validEmojis[i]
        validEmojiDictionary[emojiName] = ''
    }

    var markdownIt = require('markdown-it')
    var md = markdownIt({ html:true, linkify:true, typographer:true, })
                .use(require('markdown-it-deflist'))
                .use(require('markdown-it-footnote'))
                .use(require('markdown-it-checkbox'))
                .use(require('markdown-it-highlightjs'))
                .use(require('markdown-it-imsize'))
                .use(require('markdown-it-emoji'), { defs: validEmojiDictionary })

    return md
}
