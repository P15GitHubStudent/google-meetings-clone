import { copyToClipboard } from 'quasar'

const copyClipboardUtil =
{
  data:
  {
    copyClipboardRef: ''
  },
  methods:
  {
    onCopyToClipboard(selector=".sharable")
    {
        const link = document.querySelector(".sharable").textContent
        if(link)
        {

        }
        console.log(`Selectror: ${selector}`)
        copyToClipboard(link)
        .then(() => {
          // success!
          this.$q.notify({
                message: `Url Copied in Clipboard ${link}`,
                color: 'black',
                position: 'bottom-left'
              })
        })
        .catch(() => {
          // fail
          this.$q.notify({
                message: 'Failed to Copy Content To Clipboard',
                color: 'red',
                position: 'bottom-left'
              })
        })

    },
  }
}

export default copyClipboardUtil
