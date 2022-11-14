function parseThemeId(themeStr) {
    const themeArr = ['霸总', '修真', '恋爱', '校园', '冒险', '搞笑', '生活', '热血', '架空', '后宫', '', '玄幻', '悬疑', '恐怖', '灵异', '动作', '科幻', '战争', '古风', '穿越', '竞技', '励志', '同人', '真人'];
    return themeStr.split(',').map(themeId => themeArr[themeId * 1 - 1]).join('·')
}

export default parseThemeId