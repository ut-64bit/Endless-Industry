// requires: rei

REIEvents.removeCategories(event => {
	global.deleteRecipeType.forEach(element => { event.yeet(element) })
})

REIEvents.hide(event => {
	global.deleteItem.forEach(element => { event.hide(element) })
	for (const [key, value] of Object.entries(global.replaceItem)) {
		event.hide(key)
	}
})

REIEvents.add(event => {
	event.add(Item.of("create:chromatic_compound"))
	event.add(Item.of("create:refined_radiance"))
	event.add(Item.of("create:shadow_steel"))
	event.add(Item.of("create:refined_radiance_casing"))
	event.add(Item.of("create:shadow_steel_casing"))

	event.add(Item.of("immersiveengineering:blueprint"))
})

REIEvents.groupEntries(event=>{
})