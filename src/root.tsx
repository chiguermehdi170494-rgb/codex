import React from 'react';
import {Composition} from 'remotion';
import {CoachAd} from './video';

export const VideoRoot: React.FC = () => (
  <Composition
    id="CoachAd"
    component={CoachAd}
    durationInFrames={300}
    fps={30}
    width={1080}
    height={1920}
  />
);
