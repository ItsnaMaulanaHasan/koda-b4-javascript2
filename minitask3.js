const obj = {
    str: [
        null,
        null,
        null,
        [
            null,
            [
                null,
                null,
                {
                    man: [
                        {
                            the: {
                                name: {
                                    of: {
                                        us: "Koda"
                                    }
                                }
                            }
                        }
                    ]
                }
            ]
        ]
    ]
}

const {str: [a, b, c, [d, [e, f, {man: [{the: {name: {of: {us: result}}}}]}]]]} = obj
console.log(result)