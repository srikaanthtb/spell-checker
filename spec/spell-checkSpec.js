describe ('spellcheck', function(){

it('checks if the word matches', function(){
    expect(spellcheck('add')).toBe('add')
}) 

it('checks if the word does not match', function(){
    expect(spellcheck('adds')).toBe('~adds~')
}) 

})