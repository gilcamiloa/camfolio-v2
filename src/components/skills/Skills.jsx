import './skills.scss'
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import {React} from 'react';
import {
  siGithub,
  siPostgresql,
  siGit,
  siBootstrap,
  siNpm,
  siMicrosoftoffice,
  siHeroku,
  siRubyonrails,
  siReact,
  siCss3,
  siHtml5,
  siJava,
  siVisualstudiocode,
  siJavascript,
} from 'simple-icons/icons'

function makeIcons(){
  return [
    siGithub,
    siPostgresql,
    siGit,
    siBootstrap,
    siNpm,
    siMicrosoftoffice,
    siHeroku,
    siRubyonrails,
    siReact,
    siCss3,
    siHtml5,
    siJava,
    siVisualstudiocode,
    siJavascript,
  ].map(icon => {
    return renderSimpleIcon({
      bgHex: '#fff',
      fallbackHex: '#000',
      icon,
      minContrastRatio: 2,
      size: 100,
      aProps: {
        onClick: e => e.preventDefault()
      }
    });
  })
}

export default function Skills() {

  const options = {
    // activateAudio: string
    // activeCursor: string
    // altImage: boolean
    // animTiming: 'Smooth' | 'Linear'
    // audioIcon: boolean
    // audioIconDark: boolean
    // audioIconSize: number
    // audioIconThickness: number
    // audioVolume: number
    // bgColor: null | string
    // bgOutlineThickness: number
    // bgRadius: number
    // centreFunc: any
    // centreImage: any
    clickToFront: 400,
    // decel: number
    depth: 1,
    // dragControl: boolean
    // dragThreshold: number
    // fadeIn: number
    // freezeActive: boolean
    // freezeDecel: boolean
    // frontSelect: boolean
    // hideTags: boolean
    // imageAlign: 'centre' | 'left' | 'right'
    // imageMode: null | 'image' | 'text' | 'both'
    // imagePadding: number
    // imagePosition: 'top' | 'bottom' | 'left' | 'right'
    // imageRadius: number | string
    imageScale: 1,
    // imageVAlign: 'top' | 'bottom' | 'middle'
    initial: [0.1, -0.1],
    // interval: number
    // lock: null | 'x' | 'y' | 'xy'
    // maxBrightness: number
    // maxSpeed: number
    // minBrightness: number
    minSpeed: 500,
    // minTags: 0 - 200
    // noMouse: boolean
    // noSelect: boolean
    // noTagsMessage: string
    // offsetX: number
    // offsetY: number
    outlineColour: "#0000",
    // outlineDash: number
    // outlineDashSpace: number
    // outlineIncrease: number
    // outlineMethod: 'outline' | 'classic' | 'block' | 'colour' | 'size' | 'none'
    // outlineOffset: number
    // outlineRadius: number
    // outlineThickness: number
    // padding: number
    // pinchZoom: boolean
    // pulsateTime: number
    // pulstateTo: number
    // radiusX: number
    // radiusY: number
    // radiusZ: number
    // repeatTagsTags: 0 - 64
    reverse: false,
    // scrollPause: boolean
    // shadow: string
    // shadowBlur: number
    // shadowOffset: [number,number] | number[]
    // shape: 'sphere' | 'hcylinder' | 'vcylinder' | 'hring' | 'vring'
    // shuffleTags: boolean
    // splitWidth: number
    // stretchX: number
    // stretchY: number
    // textAlign: 'centre' | 'left' | 'right'
    // textColour: string
    // textFont: string
    // textHeight: number
    // textVAlign: 'top' | 'bottom' | 'middle'
    tooltip: "native", // null | 'div'
    // tooltipClass: string
    tooltipDelay: 0,
    // txtOpt: boolean
    // txtScale: number
    // weight: boolean
    // weightFrom: any
    // weightGradient: any
    // weightMode: 'size' | 'colour' | 'both' | 'bgcolour' | 'bgoutline' | 'outline'
    // weightSize: number
    // weightSizeMax: number | null
    // weightSizeMin: number | null
    wheelZoom: false
    // zoom: number
    // zoomMax: number
    // zoomMin: number
    // zoomStep: number
  }



  return (
    <div className="skills">
        <div className="title">
        <h1>&lt;&lt;<span>&nbsp;Skills&nbsp;</span>&gt;&gt;</h1>
        </div>
        <div id='icon-cloud'>
          <Cloud options={options}>{makeIcons()}</Cloud>
        </div>
    </div>
  )
};
