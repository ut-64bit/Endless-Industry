// priority: 0

// Item
ItemEvents.toolTierRegistry(event => { })

StartupEvents.registry('item', event => {
	event.create('plant_fiber').texture('kubejs:item/plant_fiber')
	//event.create("metal_file").texture("kubejs:item/metal_file")
})

ItemEvents.modification(event => {
	event.modify("createaddition:diamond_grit_sandpaper", item => {
		item.maxDamage = 256
	})

	event.modify("#minecraft:arrows", item => {
		item.maxStackSize = 32
	})

	event.modify("snowball", item => {
		item.maxStackSize = 64
	})

	/**
	 * event.modify('minecraft:golden_pickaxe', item => {
	 * 	item.setTier(tier => {
	 * 		tier.level = 4
	 * 	})
	 * })
	 */
})

// Block
StartupEvents.registry('block', event => { })


CreateCasingEvents.encased(event=>{
	///event.createPipe("")
})