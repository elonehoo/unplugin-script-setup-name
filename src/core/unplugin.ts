import { createUnplugin } from 'unplugin'
import type { Options } from '../types'
import { supportScriptName } from './transform'

export default createUnplugin<Options>((options = {}) => {
  return {
    name: 'unplugin-scripts-setup-name',
    enforce: 'pre',

    transformInclude(id) {
      return id.endsWith('.vue')
    },

    async transform(code, id) {
      if (options.mode && options.mode === 'none')
        return null
      if (/\.vue$/.test(id) || /\.vue\?.*type=script.*/.test(id))
        return supportScriptName.call(this, code, id, options)
      return null
    },
  }
})
