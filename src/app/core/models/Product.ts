import { ProductVariant } from "./ProductVariant"
import { ProductVersion } from "./ProductVersion"

export interface Product {
    agreementCode: string,
    agreementDesc: string,
    agreementUrl: string,
    allowModify: boolean,
    basePrice: number,
    description: string,
    eduLicenseDescription: string,
    lastReleaseDate: Date | string,
    lastVersion: string
    maxNumberOfUsers: number,
    operatingSystem: string,
    packetDescription?: string | any,
    packets?: any,
    prgCode: number
    productCode: number,
    productId: number
    productName: string,
    productNameDescription: string
    productNameShortcut: string
    productUrl: string
    requiredProducts?: string | any,
    variantDescription: string,
    variants: ProductVariant[],
    versions: ProductVersion[]
};
