import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'

export default function handler(
    _req: GatsbyFunctionRequest,
    res: GatsbyFunctionResponse
) {
    res.json({
        msg: 'success',
    })
}
