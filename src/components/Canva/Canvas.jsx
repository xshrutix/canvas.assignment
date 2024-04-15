import React, { useRef, useEffect, useContext } from 'react';
import { drawRect } from './Rectangle.jsx';
import { ConfigurationContext } from '../../context/config.jsx';

const makeLines = (inputStr, charsPerLine) => {
  var words = inputStr.split(' ');
  var lines = [];
  var curr = '';

  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    if (curr.length + word.length <= charsPerLine) {
      curr += word + ' ';
    } else {
      lines.push(curr.trim());
      curr = word + ' ';
    }
  }

  lines.push(curr.trim());

  return lines;
}


const Canvas = () => {
  const canvasRef = useRef();
  const textcanvasRef = useRef();
  const ctacanvasRef = useRef();
  const { configuration } = useContext(ConfigurationContext);

  const defaultBgColor = '#0369A1';
  const adText = '1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs';
  const adCTA = 'Shop Now';
  const adImage = 'https://apartmentshoustonenergycorridor.com/wp-content/uploads/2018/06/Two-Bedroom-Apartment-in-Houston-TX-5.png';

  const drawAdImage = (img) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'source-atop';

    const image = new Image();
    image.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 56, 180, 970, 600);
    };
    image.src = img || adImage;
    ctx.globalCompositeOperation = 'source-over';
  };

  const writeTextContent = (text) => {
    const canvas = textcanvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '44px Arial';
    let start = 1150; // Adjust the starting position
    if (!text) {
      text = adText;
    }
    const lines = makeLines(text, 31);
    lines.forEach((line) => {
      ctx.fillText(line, 50, start);
      start += 50;
    });
  };

  const writeCTA = (text) => {
    const canvas = ctacanvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const bgColor = '#000000';
    if (text === '') {
      text = adCTA;
    }
    const lines = makeLines(text, 20);
    ctx.font = '30px Arial';
    const text_width = ctx.measureText(lines[0]).width;
    const text_height = lines.length * 30;
    const width = text_width + 48;
    const height = text_height + 48;
    drawRect(800, 1500, width, height, 20, bgColor, ctx);
    let starty = 1500 + (height / 2 + 8);
    const startx = 800 + 24;
    ctx.fillStyle = '#ffffff';
    lines.forEach((line) => {
      ctx.fillText(line, startx, starty);
      starty += 30;
    });
  };

  useEffect(() => {
    if (configuration.adContent !== undefined) {
      writeTextContent(configuration.adContent);
    }
    if (configuration.cta !== undefined) {
      writeCTA(configuration.cta);
    }
    if (configuration.image !== undefined) {
      drawAdImage(configuration.image.toString())
    }
  }, [configuration]);

  return (
    <>
      <canvas
        className='w-56 sm:w-[30rem]'
        ref={canvasRef}
        width={1080}
        height={1080}
        style={{ backgroundColor: `${configuration.bgColor || defaultBgColor}`, position: 'absolute' }}
      ></canvas>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <canvas
          className='w-56 sm:w-[30rem]'
          ref={textcanvasRef}
          width={1080}
          height={1600}
          style={{ position: 'absolute' }}
        ></canvas>
        <canvas
          className='w-56 sm:w-[30rem]'
          ref={ctacanvasRef}
          width={1080}
          height={2400}
          style={{ position: 'absolute' }}
        ></canvas>
      </div>
    </>
  );
}

export default Canvas;
