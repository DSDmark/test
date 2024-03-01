import { NextFont } from 'next/dist/compiled/@next/font'
import { IFontStyles } from './type'

export const getFontStyle = (fontName: NextFont): IFontStyles => {
  return {
    fontFamily: fontName.style?.fontFamily || '',
    fontStyle: fontName.style?.fontStyle || '',
    fontWeight: fontName.style?.fontWeight || '',
  }
}
