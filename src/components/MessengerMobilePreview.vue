<template>
  <div class="flex flex-col entire-post-frame">
    <div class="message-frame">
      <div class="message-text px-4 pt-4 pb-2">
        https://your.domain.here/path
      </div>
    </div>
    <div id="preview-box">
      <div class="preview-frame">
        <div
          class="preview-image flex flex-col align-middle justify-center text-center"
          :style="`color: ${imageData.color}; background-color: ${imageData.backgroundColor};`"
        >
          <div class="image-title">{{ imageData.title }}</div>
          <div class="image-subtitle">{{ imageData.subtitle }}</div>
        </div>
        <div class="preview-content p-4 flex flex-col justify-between">
          <div>
            <div class="font-bold mb-1 text-sm">Your webpage title here</div>
            <div class="text-gray-600 text-sm">
              Your webpage description here.
            </div>
          </div>
          <div class="text-gray-600 text-sm">your.domain.here</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessengerMobilePreview",
  props: { imageData: { type: Object, required: true } },
};
</script>

<style scoped>
.entire-post-frame {
  max-width: 300px;
}
.preview-frame {
  width: 300px;
}
.preview-image {
  border-bottom-width: 0;
  padding: 1rem;
  height: 160px;
}
.preview-content {
  border-bottom-left-radius: 1.3rem;
  border-bottom-right-radius: 1.3rem;
  border-top-width: 0;
  background-color: #f2f2f2;
}
.image-title {
  font-size: 100%;
  font-weight: bold;
  line-height: 1.1;
}
.image-subtitle {
  font-size: 75%;
  font-weight: bold;
}
.message-frame {
  border-top-left-radius: 1.3rem;
  border-top-right-radius: 1.3rem;
  background-color: #0099ff;
  color: #fff;
}
</style>
