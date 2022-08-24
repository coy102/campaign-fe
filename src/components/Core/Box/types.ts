import { PropsFor, SimpleStyleFunction } from '~/config/types'

let spacing: SimpleStyleFunction<
  | 'm'
  | 'mt'
  | 'mr'
  | 'mb'
  | 'ml'
  | 'mx'
  | 'my'
  | 'p'
  | 'pt'
  | 'pr'
  | 'pb'
  | 'pl'
  | 'px'
  | 'py'
>

export type SpacingProps = PropsFor<typeof spacing>

let flexbox: SimpleStyleFunction<
  | 'display'
  | 'flexBasis'
  | 'flexDirection'
  | 'flexWrap'
  | 'justifyContent'
  | 'alignItems'
  | 'alignContent'
  | 'flex'
  | 'flexGrow'
  | 'flexShrink'
  | 'alignSelf'
>
export type FlexboxProps = PropsFor<typeof flexbox>

let colors: SimpleStyleFunction<'backgroundColor'>
export type ColorProps = PropsFor<typeof colors>

let borders: SimpleStyleFunction<'borderColor' | 'borderRadius' | 'borderWidth'>
export type BordersProps = PropsFor<typeof borders>

let sizing: SimpleStyleFunction<
  'width' | 'maxWidth' | 'minWidth' | 'height' | 'maxHeight' | 'minHeight'
>
export type SizingProps = PropsFor<typeof sizing>

let positions: SimpleStyleFunction<
  'zIndex' | 'position' | 'top' | 'right' | 'bottom' | 'left'
>
export type PositionsProps = PropsFor<typeof positions>

let shadows: SimpleStyleFunction<
  | 'shadowColor'
  | 'shadowOffset'
  | 'shadowOpacity'
  | 'shadowRadius'
  | 'elevation'
>
export type ShadowsProps = PropsFor<typeof shadows>

let typography: SimpleStyleFunction<
  | 'color'
  | 'fontFamily'
  | 'fontSize'
  | 'fontStyle'
  | 'fontWeight'
  | 'letterSpacing'
  | 'lineHeight'
  | 'textAlign'
>

export type TypographyProps = PropsFor<typeof typography>
