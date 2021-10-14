module.exports = {
  title: `sung-il.github.io`,
  description: `인도너구리의 잡다한 저장소`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://sung-il.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `장성일`,
    bio: {
      role: `개발자`,
      description: ['-', '-', '-'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/sung-il`, // `https://github.com/sung-il`,
      linkedIn: ``, // `https://www.linkedin.com/in/-`,
      email: `j.sungil099@gmail.com`, // `j.sungil099@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.10 ~',
        activity: '개인 블로그 운영',
        links: {
          github: 'https://github.com/sung-il/sung-il.github.io'
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'gatsby 블로그 테마 기반으로 블로그 작성',
        description:
          '시간이 지날수록 기록의 중요성을 느낍니다.',
        techStack: ['github pages'],
        thumbnailUrl: '',
        links: {
          github: 'https://github.com/sung-il/sung-il.github.io'
        },
      },
    ],
  },
};
