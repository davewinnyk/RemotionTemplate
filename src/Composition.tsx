import { useVideoConfig, useCurrentFrame } from "remotion";
import { Rain } from "./Rain";
import { RainEffect } from "./RainEffect";

export const MyComposition = () => {
const { fps, durationInFrames, width, height }= useVideoConfig();

const frame = useCurrentFrame();
//const opacity = frame/durationInFrames * 2 ; 

	return(
		<><div style={{flex: 1, textAlign: 'center', fontSize: '7em', color: 'white', background: 'black' }}><div>
			<Rain />
			<RainEffect />
		</div>
		<div style={{  }}>
				{width}x{height} {durationInFrames / fps}s {frame}
			</div>
			</div></>
	) 
	;
};
