<template>
  <div class="home">
    <div id="main">123</div>
    <img src="../assets/images/84718876_p1.jpg" alt="" width="300" />
    <!-- <img src="../assets/images/IMG_1298.HEIC" alt=""> -->
    <input type="file" name="uploadPic" id="uploadPic" @change="handleFiles" />
    <div id="preview"></div>
  </div>
</template>

<script>
import heic2any from 'heic2any'
import { storageFile, createToken } from '@/api/oss'
export default {
  name: 'home',
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    handleFiles(e) {
      console.log('e: ', e.target.files) // 即FileList
      const preview = document.querySelector('#preview')
      console.log('FileList: ', document.getElementById('uploadPic').files)
      const selectedFile = document.getElementById('uploadPic').files[0]
      // 创建img标签
      let img = document.createElement('img')
      img.classList.add('obj')
      preview.appendChild(img)
      if (
        ['jpeg', 'png', 'jpg', 'webp'].includes(
          selectedFile.type.slice(6).toLowerCase()
        )
      ) {
        console.log('jpeg格式')

        const reader = new FileReader()
        reader.onload = (e) => {
          img.src = e.target.result
          // img.width = 640
          img.height = 320
        }
        reader.readAsDataURL(selectedFile)
        this.uploadFile(selectedFile)
      } else if (selectedFile.type === 'image/heic') {
        console.log('heic格式')
        // 提示标签
        let waitBox = document.createElement('div')
        waitBox.id = 'waiting'
        waitBox.innerHTML = '图片正在转换...'
        preview.append(waitBox)

        heic2any({
          blob: selectedFile, // 将heic转换成一个buffer数组的图片
          toType: 'image/jpg', //要转化成具体的图片格式，可以是png/gif
          quality: 1 // 图片的质量，参数在0-1之间
        }).then(
          (
            /**
             * @description:
             * @param {Blob} result Blob类型
             */
            result
          ) => {
            console.log('result: ', result)

            /* 预览图片 */
            let reader = new FileReader()
            reader.onload = (e) => {
              let imgBase64 = e.target.result
              console.log('imgBase64: ', imgBase64)
              img.src = imgBase64
              img.height = 320
            }
            reader.readAsDataURL(result)
            this.uploadFile(result)
          }
        )
      }
    },
    /**
     * @description: 上传图片
     * @param {File} file 图片文件
     * @return {*}
     */

    async uploadFile(file) {
      console.log('开始上传文件', file)
      let res = await createToken({
        bucket: 'img',
        isCover: '0',
        name: file.name,
        size: file.size
      })
      console.log('res.data: ', res.data)
      if (res.data.code === 200) {
        let formdata = new FormData()
        formdata.append('files', file)
        formdata.append('ossToken', res.data.data)
        let res2 = await storageFile(formdata)
        console.log('res2: ', res2)
      }
    }
  }
}
</script>

<style></style>
