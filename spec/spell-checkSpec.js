describe ('spellcheck', function(){

it('checks if the word matches', function(){
    expect(spellcheck('add')).toBe('add')
}) 

it('checks if the word does not match', function(){
    expect(spellcheck('adds')).toBe('~adds~')
}) 

it('checks if the word matches with capitals', function(){
    expect(spellcheck('Add')).toBe('Add')
}) 

it('checks if the word does not matche with capitals', function(){
    expect(spellcheck('Adds')).toBe('~Adds~')
}) 
})