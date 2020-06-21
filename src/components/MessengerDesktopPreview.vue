<template
  ><div id="preview-box">
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
          <div class="font-bold mb-1">Your webpage title here</div>
          <div>Your webpage description here.</div>
        </div>
        <div class="text-gray-600 text-sm">your.domain.here</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessengerDesktopPreview",
  props: { imageData: { type: Object, required: true } },
};
</script>

<style scoped>
.preview-frame {
  height: 370px;
  width: 500px;
}
.preview-image {
  border-top-left-radius: 1.3rem;
  border-top-right-radius: 1.3rem;
  border: 1px solid #aaa;
  border-bottom-width: 0;
  height: 67%;
  padding: 1rem;
}
.preview-content {
  height: 33%;
  border-bottom-left-radius: 1.3rem;
  border-bottom-right-radius: 1.3rem;
  border: 1px solid #aaa;
  border-top-width: 0;
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
</style>
