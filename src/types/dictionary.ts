// 从 en.json 推导出全量字典类型
import en from '@/lib/i18n/dictionaries/en.json'

export type Dictionary = typeof en
export type ProductsDict = Dictionary['products']
export type GasSpringDict = ProductsDict['gas-spring']
export type WhatIsGSDict = GasSpringDict['whatIsGS']
// 可按需继续导出更多子类型，如：
// export type HowChooseGSDict = GasSpringDict['howChooseGS']