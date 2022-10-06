export default interface RepartidorInterface {
    uid?: string,
    id: number;
    name:string|undefined;
    age:number|undefined;
    transportCapacity:number|undefined;
    countryOfBirth:string|undefined;
    ownerUnit: boolean|undefined;
    countryId: string | undefined;
}
