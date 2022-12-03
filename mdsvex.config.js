import { mdsvex } from 'mdsvex';

import remarkEmoji from 'remark-emoji';
import remarkAdmonitions from 'remark-admonitions';

export default mdsvex({
  extensions: ['.md'],
  remarkPlugins: [
    remarkEmoji,
    [
      remarkAdmonitions,
      {
        customTypes: {
          info: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>'
          },
          help: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-10a4 4 0 0 1 1.19 7.82l-.19.054V14a1 1 0 0 1-1.993.117L11 14v-1a1 1 0 0 1 .883-.993l.266-.012A2 2 0 1 0 10 10a1 1 0 0 1-2 0 4 4 0 0 1 4-4z"/></svg>'
          },
          warning: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-10a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1z"/></svg>'
          },
          danger: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M13.178 2.279c.51.255.924.668 1.18 1.179l7.363 14.728A2.636 2.636 0 0 1 19.364 22H4.636a2.636 2.636 0 0 1-2.358-3.814L9.642 3.458a2.636 2.636 0 0 1 3.536-1.18zm-1.94 2.193L4.09 18.766A.853.853 0 0 0 4.853 20h14.294a.853.853 0 0 0 .763-1.234L12.763 4.472a.853.853 0 0 0-1.526 0zM12 16a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-8a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"/></svg>'
          },
          success: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm3.293 4.293L10 13.586l-1.293-1.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l6-6a1 1 0 1 0-1.414-1.414z"/></svg>'
          },
          failure: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM7.293 7.293a.999.999 0 0 1 1.32-.083l.094.083L12 10.586l3.293-3.293a.999.999 0 0 1 1.498 1.32l-.084.094L13.414 12l3.293 3.293a.999.999 0 0 1-1.311 1.504l-.103-.09L12 13.414l-3.293 3.293a.997.997 0 0 1-1.414 0 .999.999 0 0 1-.083-1.32l.083-.094L10.586 12 7.293 8.707a.999.999 0 0 1 0-1.414z"/></svg>'
          }
        }
      }
    ]
  ]
});
