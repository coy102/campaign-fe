export type PropsFor<
  SomeStyleFunction
> = SomeStyleFunction extends StyleFunction<infer Props> ? Props : never
export type StyleFunction<Props> = (props: Props) => any

export type SimpleStyleFunction<PropKey extends keyof any> = StyleFunction<
  Partial<Record<PropKey, any>>
>
