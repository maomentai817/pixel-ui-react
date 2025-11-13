/* 基础组件 */
export * from './Text'
export * from './Button'
export * from './Icon'
export * from './Overlay'

/* 表单组件 */
export * from './Input'

/* Feedback 反馈组件 */
export * from './Tooltip'
export * from './Popconfirm'

/* 全局配置 */
export * from './ConfigProvider'

// 注册所有 paintworklet
export async function registerPaintWorklets() {
  if (typeof CSS !== 'undefined' && 'paintWorklet' in CSS) {
    try {
      // 使用动态导入
      const [
        pixelboardWorkletURL,
        pixelboxWorkletURL,
        pixelboxOrnamentWorkletURL,
        pixelboxStampWorkletURL,
        pixelcontentWorkletURL,
        pixelpanelWorkletURL,
        pixelstripeWorkletURL,
        pixelgridBasicWorkletURL,
        pixelgridPreset1WorkletURL,
        pixeldotWorkletURL,
      ] = await Promise.all([
        import('./worklets/dist/pixelboard.worklet.js?url').then(m => m.default),
        import('./worklets/dist/pixelbox.worklet.js?url').then(m => m.default),
        import('./worklets/dist/pixelboxOrnament.worklet.js?url').then(m => m.default),
        import('./worklets/dist/pixelboxStamp.worklet.js?url').then(m => m.default),
        import('./worklets/dist/pixelcontent.worklet.js?url').then(m => m.default),
        import('./worklets/dist/pixelpanel.worklet.js?url').then(m => m.default),
        import('./worklets/dist/pixelstripe.worklet.js?url').then(m => m.default),
        import('./worklets/dist/pixelgridBasic.worklet.js?url').then(m => m.default),
        import('./worklets/dist/pixelgridPreset1.worklet.js?url').then(m => m.default),
        import('./worklets/dist/pixeldot.worklet.js?url').then(m => m.default),
      ]);

      (CSS as any).paintWorklet.addModule(pixelboardWorkletURL);
      (CSS as any).paintWorklet.addModule(pixelboxWorkletURL);
      (CSS as any).paintWorklet.addModule(pixelboxOrnamentWorkletURL);
      (CSS as any).paintWorklet.addModule(pixelboxStampWorkletURL);
      (CSS as any).paintWorklet.addModule(pixelcontentWorkletURL);
      (CSS as any).paintWorklet.addModule(pixelpanelWorkletURL);
      (CSS as any).paintWorklet.addModule(pixelstripeWorkletURL);
      (CSS as any).paintWorklet.addModule(pixelgridBasicWorkletURL);
      (CSS as any).paintWorklet.addModule(pixelgridPreset1WorkletURL);
      (CSS as any).paintWorklet.addModule(pixeldotWorkletURL);
    } catch (err) {
      console.warn('[Pixel UI] Error loading paintWorklet: ', err);
    }
  } else {
    console.warn(
      '[Pixel UI] CSS Houdini Paint Worklet API is not supported in this browser.'
    );
  }
}