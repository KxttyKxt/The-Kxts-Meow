// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
})

onEvent('item.tags', event => {
	// Add duck egg to appropriate tags
	event.add('forge:eggs', 'duckling:duck_egg')
	event.add('balm:eggs', 'duckling:duck_egg')
})
