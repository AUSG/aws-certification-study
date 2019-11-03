/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props
    const { baseUrl, docsUrl } = siteConfig
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

    const SplashContainer = props => (
      <div className='homeContainer'>
        <div className='homeSplashFade'>
          <div className='wrapper homeWrapper'>{props.children}</div>
        </div>
      </div>
    )

    const Logo = props => (
      <div className='projectLogo'>
        <img src={props.img_src} alt='Project Logo' />
      </div>
    )

    const ProjectTitle = () => (
      <h2 className='projectTitle'>
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    )

    const PromoSection = props => (
      <div className='section promoSection'>
        <div className='promoRow'>
          <div className='pluginRowBlock'>{props.children}</div>
        </div>
      </div>
    )

    const Button = props => (
      <div className='pluginWrapper buttonWrapper'>
        <a className='button' href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    )

    return (
      <SplashContainer>
        <div className='inner'>
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('doc1')}>introduction</Button>
            <Button href={docUrl('module1/script1')}>Module1</Button>
            <Button href={docUrl('module2/script1')}>Module2</Button>
            <Button href={docUrl('module3/script1')}>Module3</Button>
            <Button href={docUrl('module4/script1')}>Module4</Button>
            <Button href={docUrl('module5/script1')}>Module5</Button>
            <Button href={docUrl('module6/script1')}>Module6</Button>
            <Button href={docUrl('module7/script1')}>Module7</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props
    const { baseUrl } = siteConfig

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align='center'
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    )

    const Goals = () => (
      <Block layout='fourColumn'>
        {[
          {
            content: '누구나 참여할 수 있는 오픈 스터디',
            image: `${baseUrl}img/team.svg`,
            imageAlign: 'top',
            title: 'Goal One',
          },
          {
            content: '쉽게 볼 수 있는 도큐먼트',
            image: `${baseUrl}img/readability.svg`,
            imageAlign: 'top',
            title: 'Goal Two',
          },
          {
            content: '기본부터 고급까지',
            image: `${baseUrl}img/level-up.svg`,
            imageAlign: 'top',
            title: 'Goal Three',
          },
        ]}
      </Block>
    )

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
            <div>{user.caption}</div>
          </a>
        ))

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page

      return (
        <div className='productShowcaseSection paddingBottom'>
          <h2>Who are Authors?</h2>
          <p>This project is written by all these people</p>
          <div className='logos'>{showcase}</div>
          <div className='more-users'>
            <a className='button' href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      )
    }

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className='mainContainer'>
          <Goals />
          <Showcase />
        </div>
      </div>
    )
  }
}

module.exports = Index
