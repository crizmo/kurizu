import React from 'react';
import { ImageResponse } from '@vercel/og';
import { RESUME_DATA } from '../../../../data/resume-data';

export const runtime = 'edge';

export async function GET() {
  const drawings = RESUME_DATA.drawings.slice(0, 12); // Take first 12 drawings for the grid

  // Create a grid layout: 4 columns, 3 rows
  const gridCols = 4;
  const gridRows = 3;
  const imageSize = 100; // Size of each drawing thumbnail
  const padding = 10;
  const totalWidth = gridCols * (imageSize + padding) + padding;
  const totalHeight = gridRows * (imageSize + padding) + padding + 100; // Extra space for title

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: totalWidth,
          height: totalHeight,
          backgroundColor: '#ffffff',
          fontFamily: 'Inter',
        }}
      >
        <h1
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#000000',
          }}
        >
          My Drawings
        </h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${gridCols}, ${imageSize}px)`,
            gridTemplateRows: `repeat(${gridRows}, ${imageSize}px)`,
            gap: `${padding}px`,
          }}
        >
          {drawings.map((drawing, index) => (
            <img
              key={index}
              src={`https://kurizu.vercel.app${drawing.image}`}
              alt={drawing.title}
              style={{
                width: imageSize,
                height: imageSize,
                objectFit: 'cover',
                borderRadius: '4px',
              }}
            />
          ))}
        </div>
      </div>
    ),
    {
      width: totalWidth,
      height: totalHeight,
    }
  );
}