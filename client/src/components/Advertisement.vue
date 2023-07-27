<template>
    <div>
      <!-- Ad unit -->
      <ins
        class="adsbygoogle"
        style="display:block"
        :data-ad-client="adClient"
        :data-ad-slot="adSlot"
        :data-ad-format="adFormat"
        :data-full-width-responsive="fullWidthResponsive"
      ></ins>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      adClient: {
        type: String,
        required: true,
      },
      adSlot: {
        type: String,
        required: true,
      },
      adFormat: {
        type: String,
        default: 'auto',
      },
      fullWidthResponsive: {
        type: Boolean,
        default: true,
      },
    },
    computed: {
      adsbygoogleSrc() {
        return `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${this.adClient}`;
      },
    },
    mounted() {
      // Load AdSense script dynamically
      const script = document.createElement('script');
      script.src = this.adsbygoogleSrc;
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
  
      // Trigger adsense unit
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    },
  };
  </script>
  
  <style>
  /* Add any additional styles for the ad unit here, if needed */
  </style>
  