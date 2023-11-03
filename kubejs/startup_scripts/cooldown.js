// ignored: true

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Stop', event => {
	if (event.getItem() == Item.of("botania:flugel_eye")) {
		event.entity.addItemCooldown("botania:king_key", 70)
	}
})

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Finish', event => {
	if (event.getItem() == Item.of("botania:flugel_eye")) {
		event.entity.addItemCooldown("botania:flugel_eye", 12000)
	} else if (event.getItem() == Item.of("botania:flugel_eye")) {
		event.entity.addItemCooldown("botania:king_key", 140)
	} else if (event.getItem() == Item.of("botania:infinite_fruit")) {
		event.entity.addItemCooldown("botania:infinite_fruit", 6000)
	}
})
