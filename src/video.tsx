import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, staticFile, Sequence} from 'remotion';
import {OffthreadVideo, Audio} from 'remotion';

const emerald='#103d35', cream='#f6f0e7', gold='#d9b776';
const wordStyle:React.CSSProperties={fontFamily:'"Noto Sans Arabic", "Arial", sans-serif',direction:'rtl',unicodeBidi:'plaintext',fontWeight:800};

const AnimatedLine:React.FC<{text:string;delay:number;size:number;color:string}>=({text,delay,size,color})=>{
  const frame=useCurrentFrame();
  const {fps}=useVideoConfig();
  const p=spring({frame:frame-delay,fps,config:{damping:18,stiffness:115}});
  return <div dir="rtl" style={{...wordStyle,fontSize:size,lineHeight:1.55,color,opacity:Math.max(0,Math.min(1,p)),transform:`translateY(${(1-p)*55}px)`,textAlign:'center',maxWidth:920}}>{text}</div>;
};

export const CoachAd:React.FC=()=>{
 const frame=useCurrentFrame();
 const t=frame/30;
 const zoom=interpolate(frame,[0,299],[1,1.085]);
 const vignette=interpolate(frame,[0,95,220,299],[0.12,0.32,0.2,0.12]);
 return <AbsoluteFill style={{backgroundColor:emerald,overflow:'hidden'}}>
   <AbsoluteFill style={{transform:`scale(${zoom})`,background:'radial-gradient(ellipse at 70% 25%, #347266 0%, #103d35 45%, #08241f 100%)'}}/>
   <AbsoluteFill style={{background:`radial-gradient(circle at center, transparent 25%, rgba(0,0,0,${vignette}) 100%)`}}/>
   <AbsoluteFill style={{top:130,left:85,width:910,height:910,border:'2px solid rgba(217,183,118,.16)',borderRadius:'50%',transform:`rotate(${t*6}deg)`}}/>
   <AbsoluteFill style={{top:270,left:-130,width:1320,height:1320,border:'1px solid rgba(217,183,118,.12)',borderRadius:'50%'}}/>
   <AbsoluteFill style={{alignItems:'center',justifyContent:'center',gap:35,padding:'160px 85px'}}>
     <div style={{width:105,height:4,backgroundColor:gold,marginBottom:60}}/>
     <AnimatedLine text="كتعطي لكلشي…" delay={14} size={91} color={cream}/>
     <AnimatedLine text="وكتنسي راسك؟" delay={78} size={100} color={gold}/>
     <div style={{width:105,height:4,backgroundColor:gold,marginTop:60}}/>
   </AbsoluteFill>
   <AbsoluteFill style={{justifyContent:'flex-end',alignItems:'center',paddingBottom:160}}>
     <div dir="rtl" style={{...wordStyle,fontSize:34,color:cream,opacity:interpolate(frame,[175,205,290,299],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}}>ورشة مجانية مباشرة للنساء</div>
   </AbsoluteFill>
 </AbsoluteFill>;
};
