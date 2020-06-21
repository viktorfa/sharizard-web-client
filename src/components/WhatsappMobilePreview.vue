<template>
  <div>
    <div class="message-frame">
      <div class="preview-frame flex">
        <div
          class="preview-image flex flex-col align-middle justify-center text-center"
          :style="`color: ${imageData.color}; background-color: ${imageData.backgroundColor};`"
        >
          <div class="image-title">{{ imageData.title }}</div>
          <div class="image-subtitle">{{ imageData.subtitle }}</div>
        </div>
        <div class="preview-content p-4 flex flex-col justify-between">
          <div>
            <div class="content-title">Your webpage title here</div>
            <div class="content-description">
              Your webpage description here.
            </div>
            <div class="content-domain">your.domain.here</div>
          </div>
        </div>
      </div>
      <div class="message-text">
        https://your.domain.here/path
      </div>
      <div class="message-status">
        09:45
        <div class="message-status-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 15"
            width="16"
            height="15"
          >
            <path
              fill="currentColor"
              d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhatsappMobilePreview",
  props: { imageData: { type: Object, required: true } },
};
</script>

<style scoped>
.message-frame {
  padding: 6px 7px 8px 9px;
  background-color: #dcf8c6;
  max-width: 600px;
  border-radius: 7.5px;
  font-size: 14.2px;
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
}
.message-text {
  color: #039be5;
  font-size: 13.6px;
}
.message-status {
  float: right;
  margin: -10px 0 -5px 4px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 11px;
  margin: -10px 0 -5px 4px;
}
.message-status-icon {
  display: inline-block;
  color: rgba(0, 0, 0, 0.45);
  margin: -10px 0 -4px 0px;
}
.preview-frame {
  height: 90px;
  background-color: rgba(0, 0, 0, 0.065);
  margin: -3px -4px 6px -6px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
}
.preview-image {
  height: 90px;
  width: 90px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.preview-content {
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  padding: 6px 10px;
  color: #303030;
  font-size: 13.6px;
  line-height: 20px;
}
.content-title {
  line-height: 19px;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content-description {
  font-size: 12px;
  line-height: 20px;
  max-height: 40px;
  color: rgba(0, 0, 0, 0.45);
  overflow: hidden;
  text-overflow: ellipsis;
}
.content-domain {
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.image-title {
  font-size: calc(25%);
  font-weight: bold;
  line-height: 1.1;
}
.image-subtitle {
  font-size: calc(25% * 0.75);
  font-weight: bold;
}
</style>
