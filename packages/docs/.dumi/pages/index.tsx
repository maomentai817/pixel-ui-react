import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // 在首页时给 body 添加类名
    document.body.classList.add('is-homepage');

    // 滚动监听
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50); // 滚动超过 50px 时触发
    };

    // 初始检查
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('is-homepage');
      document.body.classList.remove('is-homepage-scrolled');
    };
  }, []);

  useEffect(() => {
    // 根据滚动状态添加/移除类名
    if (isScrolled) {
      document.body.classList.add('is-homepage-scrolled');
    } else {
      document.body.classList.remove('is-homepage-scrolled');
    }
  }, [isScrolled]);

  useEffect(() => {
    document.title = 'Pixel UI React';
  }, []);

  const features = [
    {
      icon: '🎨',
      title: '像素风格自定义渲染',
      description: '利用CSS Houdini Paint Worklet实现像素化渲染效果，为组件带来独特的像素艺术外观。用户可以通过CSS自定义变量动态调整像素大小、颜色风格、边框样式等，打造独一无二的UI风格。'
    },
    {
      icon: '⚙️',
      title: '全面类型支持与TypeScript友好',
      description: '所有组件均使用TypeScript编写，并提供完整类型定义。支持智能提示、类型校验以及良好的IDE体验，帮助开发者高效构建类型安全的项目。'
    },
    {
      icon: '🧩',
      title: '单文件组件结构+Monorepo管理',
      description: '每个组件以独立的SFC单文件形式开发，利于维护和按需加载。使用Monorepo管理架构，支持模块化构建与统一版本控制，适配现代前端工程化流程。'
    },
    {
      icon: '🧪',
      title: '完整测试覆盖',
      description: '使用Vitest提供单元测试保障，核心逻辑覆盖率达到100%。每个组件均配套测试用例，确保组件稳定性与长期可维护性。'
    },
    {
      icon: '📖',
      title: 'Dumi 文档系统',
      description: '使用Dumi提供Markdown风格的文档网站。支持Playground、属性切换与源码查看，支持移动端查看，提升学习与使用体验。'
    },
    {
      icon: '💡',
      title: '像素风字体与主题系统',
      description: '内置多种像素风格字体，并支持自定义注册字体。提供像素风主题变量系统，实现不同视觉风格快速切换，支持夜间模式和复古配色方案。'
    },
    {
      icon: '🧱',
      title: '兼容React+TypeScript',
      description: '基于React开发，完美适配TypeScript。支持极速开发与极致按需打包。'
    },
    {
      icon: '🚀',
      title: '支持渐进式集成',
      description: '支持完整引入与单组件引入，便于逐步迁移。你可以在不影响现有项目的前提下，按需引入任意组件进行替换或增强，实现平滑升级。'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-container">
          <div className="home-hero-content">
            <h1 className="home-hero-title">Pixel-UI React</h1>
            <p className="home-hero-description">基于CSS_Houdini的像素风组件库🐱</p>
            <div className="home-hero-actions">
              <a className="home-hero-button" href="/pixel-ui-react/getting-started">开始使用</a>
            </div>
          </div>
          <div className="home-hero-image">
            <div className="home-hero-image-inner"></div>
            <img src="/pixel-ui-react/images/homelogo.png" alt="Pixel-UI React" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="home-features">
        <div className="home-features-container">
          {features.map((feature, index) => (
            <div key={index} className="home-feature-card">
              <div className="home-feature-icon">{feature.icon}</div>
              <h3 className="home-feature-title">{feature.title}</h3>
              <p className="home-feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
