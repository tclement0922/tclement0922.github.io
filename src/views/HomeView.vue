<template>
  <div id="home">
    <svg id="logo" viewBox="0 0 384 384" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M212.521 192C212.521 147.817 248.339 112 292.521 112C320.88 112 345.793 126.756 360 149.009L329.384 161.255C320.579 150.709 307.334 144 292.521 144C266.012 144 244.521 165.49 244.521 192C244.521 218.51 266.012 240 292.521 240C307.334 240 320.579 233.291 329.384 222.745L360 234.991C345.793 257.244 320.88 272 292.521 272C248.339 272 212.521 236.183 212.521 192L212.521 192Z"
        fill="currentColor"
      />
      <path
        d="M39.999 112L184 112L184 128.001C184 132.419 182.438 136.19 179.314 139.314C176.19 142.438 172.419 144 168.001 144L120 144L120 256.001C120 260.419 118.438 264.19 115.314 267.314C112.19 270.438 108.419 272 104.001 272L87.9999 272L87.9999 144L24 144L24 127.999C24 123.581 25.562 119.81 28.686 116.686C31.81 113.562 35.581 112 39.999 112L39.999 112Z"
        fill="currentColor"
      />
    </svg>
    <h1>Hi, I'm T. Clément</h1>
    <h2>A french computer science student</h2>
  </div>
</template>

<style lang="scss" scoped>
@import '@/themes/purplish';

@property --circular-gradient-color {
  syntax: '<color>';
  inherits: false;
  initial-value: transparent;
}

@property --linear-gradient-color {
  syntax: '<color>';
  inherits: false;
  initial-value: transparent;
}

#home {
  --circular-gradient-color: #{hex_to_rgba(main_theme_color(tertiary, 600), 0.33)};
  --linear-gradient-color: #{hex_to_rgba(main_theme_color(primary, 600), 0.5)};
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle min(100svh, 100svw) at bottom right,
      var(--circular-gradient-color),
      transparent
    ),
    linear-gradient(to top right, var(--linear-gradient-color), transparent 88%);
  animation: gradient-color-loop 10s linear infinite alternate;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#logo {
  width: min(300px, 50vmin);
  height: min(300px, 50vmin);
}

h1 {
  text-align: center;
  max-width: 80vw;
}

@keyframes gradient-color-loop {
  from {
    --circular-gradient-color: #{hex_to_rgba(main_theme_color(tertiary, 600), 0.33)};
    --linear-gradient-color: #{hex_to_rgba(main_theme_color(primary, 600), 0.5)};
  }
  to {
    --circular-gradient-color: #{hex_to_rgba(main_theme_color(primary, 600), 0.33)};
    --linear-gradient-color: #{hex_to_rgba(main_theme_color(tertiary, 600), 0.5)};
  }
}
</style>
<script lang="ts" setup></script>
