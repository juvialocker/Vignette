<template lang="pug">
  <Layout style="flex-direction: row">
    //- 不需要侧边栏可注释掉SlideMenu
    SlideMenu(
        :rs="rs"
      )
    <Content class="container-content-keep">
      <router-view />
    </Content>
  </layout>
</template>
<script lang="ts">
import rs from "./router";
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import SlideMenu from "@/components/SlideMenu.vue";

@Component({
  components: {
    SlideMenu,
  },
})
export default class Container extends Vue {
  private rs = rs;
}
</script>
<style lang="scss" scoped>
.container-content-keep {
  min-width: 1035px;
  padding: 5px 20px 20px;
}
</style>
