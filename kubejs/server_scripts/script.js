ItemEvents.rightClicked("kubejs:fire_stick", event => {
	event.success("minecraft:flint_and_steel")
})

// レリックのクールダウン
ItemEvents.rightClicked("botania:flugel_eye", event => {
	event.player.addItemCooldown("botania:flugel_eye", 12000)
})

ItemEvents.rightClicked("botania:king_key", event => {
	event.player.addItemCooldown("botania:king_key", 140)
})

ItemEvents.rightClicked("botania:infinite_fruit", event => {
	if (event.player.saturation != 20)
		event.exit()
	event.player.addItemCooldown("botania:infinite_fruit", 6000)
})