declare module "*.vue" {
    import { defineComponent } from "vue";
    const Component: ReturnType<typeof defineComponent>;
    export default Component;
}
declare module '*.js';// 添加这个

declare interface Window {
    axiosCancel: Array<any>
  }