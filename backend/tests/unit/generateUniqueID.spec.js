const generateUniqueId= require ('../../src/utils/generateUniqueID')


describe('Generate Unique ID', ()=>{
    it('should generate an uniqeu ID', ()=>{
        //expera o dentro do parenteses .toBe (aqui)
        const id = generateUniqueId();

        expect(id).toHaveLength(8)
    })
})