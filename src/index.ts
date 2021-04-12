const getIfHasJSON = (str: string): string | undefined => {
  let start: number = -Infinity,
    end: number = Infinity
  start = str.indexOf('{', start + 1)
  while (start !== -1) {
    end = str.lastIndexOf('}')
    if (end <= start) return undefined
    while (end > start) {
      try {
        return JSON.stringify(JSON.parse(str.substring(start, end + 1)))
      } catch (e) {}
      end = str.substr(0, end).lastIndexOf('}')
    }
    start = str.indexOf('{', start + 1)
  }
}

export = getIfHasJSON
