// priority: 1

/**
 * @type {Special.Item[]}
 */
global.deleteItem = [
	"ae2:meteorite_compass",
	"ars_nouveau:warp_scroll",
	"ars_nouveau:stable_warp_scroll",
	/^projectvibrantjourneys:.*_hollow_log/,
	'projectvibrantjourneys:fallen_leaves',
	'projectvibrantjourneys:dead_fallen_leaves',
	'v_slab_compat:immersiveengineering/steel_scaffolding_standard_vertical_slab',
	'v_slab_compat:immersiveengineering/steel_scaffolding_grate_top_vertical_slab',
	'v_slab_compat:immersiveengineering/alu_scaffolding_grate_top_vertical_slab',
	'v_slab_compat:immersiveengineering/alu_scaffolding_standard_vertical_slab',
]

/**
 * @type {Special.RecipeType[]}
 */
global.deleteRecipeType = [
]

/**
 * @type {Special.Enchantment[]}
 */
const deleteEnchantType = [
]

ServerEvents.recipes(event => {
	const { minecraft, create, immersiveengineering } = event.recipes;
	const { createaddition, create_new_age } = global.recipes;

	event.shaped(Item.of("kubejs:fire_stick"), [
		"/ ",
		" /"
	], {
		"/": "stick"
	}).id("kubejs:fire_stick")

	event.replaceInput({ id: /^supplementaries:candle_holders\/candle_holder_*/ }, "iron_ingot", '#forge:ingots/cast_iron')
	event.replaceInput({ id: "supplementaries:faucet" }, "iron_ingot", '#forge:ingots/cast_iron')
	event.replaceInput({ id: "minecraft:cauldron" }, "iron_ingot", '#forge:ingots/cast_iron')
	event.replaceInput({ id: "decoration_delight:sink_recipe" }, "iron_ingot", '#forge:ingots/cast_iron')
	event.replaceInput({ id: "decoration_delight:trash_bin_recipe" }, "iron_ingot", '#forge:ingots/cast_iron')
	event.replaceInput({ id: "farmersdelight:cooking_pot" }, "iron_ingot", '#forge:ingots/cast_iron')
	event.replaceInput({ id: "farmersdelight:skillet" }, "iron_ingot", '#forge:ingots/cast_iron')
	event.replaceInput({ id: "farmersdelight:stove" }, "iron_ingot", '#forge:ingots/cast_iron')
	event.replaceInput({ id: "supplementaries:spring_launcher" }, "iron_ingot", '#forge:ingots/cast_iron')

	event.replaceInput({ id: "quark:oddities/crafting/backpack" }, Item.of("quark:ravager_hide"), Item.of("string"))
	event.replaceInput({ input: "notreepunching:flint_knife" }, Item.of("notreepunching:flint_knife"), Item.of("farmersdelight:flint_knife"))
	event.replaceInput({ input: "notreepunching:iron_knife" }, Item.of("notreepunching:iron_knife"), Item.of("farmersdelight:iron_knife"))
	event.replaceInput({ input: "notreepunching:gold_knife" }, Item.of("notreepunching:gold_knife"), Item.of("farmersdelight:golden_knife"))
	event.replaceInput({ input: "notreepunching:diamond_knife" }, Item.of("notreepunching:diamond_knife"), Item.of("farmersdelight:diamond_knife"))
	event.replaceInput({ input: "notreepunching:netherite_knife" }, Item.of("notreepunching:netherite_knife"), Item.of("farmersdelight:netherite_knife"))

	event.remove({ id: "farmersdelight:rope" })
	event.shaped("farmersdelight:rope", [
		"#",
		"#"
	], {
		"#": 'farmersdelight:straw'
	}).id("farmersdelight:rope")

	event.remove({ id: "quark:building/crafting/rope" })
	event.shaped("quark:rope", [
		"##",
		"##",
		"##"
	], {
		"#": 'string'
	}).id("quark:building/crafting/rope")

	// enigmaticunity
	{
		// enigmaticunity:bright_source_generator
		event.remove({ id: "enigmaticunity:bright_source_generator" })
		createaddition.charging(event, "enigmaticunity:bright_source_generator", "enigmaticunity:dim_source_generator", 10000, "enigmaticunity:bright_source_generator")

		// enigmaticunity:iridescent_source_generator
		event.remove({ id: "enigmaticunity:iridescent_source_generator" })
		createaddition.charging(event, "enigmaticunity:iridescent_source_generator", "enigmaticunity:bright_source_generator", 20000, "enigmaticunity:iridescent_source_generator")

		// enigmaticunity:bright_source_producer
		event.remove({ id: "enigmaticunity:bright_source_producer" })
		createaddition.charging(event, "enigmaticunity:bright_source_producer", "enigmaticunity:dim_source_producer", 10000, "enigmaticunity:bright_source_producer")

		// enigmaticunity:iridescent_source_producer
		event.remove({ id: "enigmaticunity:iridescent_source_producer" })
		createaddition.charging(event, "enigmaticunity:iridescent_source_producer", "enigmaticunity:bright_source_producer", 20000, "enigmaticunity:iridescent_source_producer")
	}

	// create
	{
		// ネザーラック
		//create.haunting("netherrack", "clay", 100).id("create:haunting/netherrack")

		// 色彩の化合物
		create.mixing("create:chromatic_compound", ["create:polished_rose_quartz", "3x create:powdered_obsidian", "3x glowstone_dust"]).superheated().id("create:mixing/chromatic_compound")

		// 光輝ケーシング
		create.item_application("create:refined_radiance_casing", ["create:andesite_alloy_block", "create:refined_radiance"]).id("create:item_application/refined_radiance_casing")

		// シャドウケーシング
		create.item_application("create:shadow_steel_casing", ["create:industrial_iron_block", "create:shadow_steel"]).id("create:item_application/shadow_steel_casing")

		// 炭の粉末
		create.crushing("9x #forge:dusts/coal", "#forge:storage_blocks/coal").id("create:crushing/9x_coal_dust")

		create.crushing(["2x #forge:dusts/sulfur", Item.of("#forge:dusts/sulfur").withChance(0.5)], '#forge:storage_blocks/sulfur').id("create:crushing/sulfur")

		event.remove({ id: "createlowheated:charcoal_burner" })
		event.shaped("createlowheated:charcoal_burner", [
			"A A",
			"A A",
			"PPP"
		], {
			"A": 'create:andesite_alloy',
			"P": "#forge:plates/iron"
		}).id("createlowheated:charcoal_burner")

		event.remove({ id: "sophisticatedbackpacks:backpack" })
		event.shaped('sophisticatedbackpacks:backpack', [
			"SLS",
			"SCS",
			"LLL"
		], {
			"S": '#supplementaries:ropes',
			"L": '#forge:leather',
			"C": '#create:toolboxes'
		}).id("sophisticatedbackpacks:backpack")

		create.mixing("3x #forge:ingots/cast_iron", ["3x iron_ingot", "#minecraft:coals"], 200, "lowheated")
	}

	// farmer
	{
		event.replaceInput({ id: "quark:tools/crafting/seed_pouch" }, 'leather', 'farmersdelight:canvas')
	}

	// immersiveengineering
	{
		// immersive:tools
		event.replaceInput({ id: "immersiveengineering:crafting/hammer" }, "iron_ingot", "#forge:ingots/steel")
		event.replaceInput({ id: "immersiveengineering:crafting/wirecutter" }, "iron_ingot", "#forge:ingots/steel")
		event.replaceInput({ id: "immersiveengineering:crafting/screwdriver" }, "#forge:rods/iron", "#forge:rods/steel")

		// blueprint
		event.shaped("immersiveengineering:blueprint", [
			"BBB",
			"PPP"
		], {
			"B": '#forge:dyes/blue',
			"P": "paper"
		}).id("immersiveengineering:crafting/blueprint")
		event.shapeless(Item.of('immersiveengineering:blueprint', '{blueprint:"bannerpatterns"}'), ["immersiveengineering:blueprint", "#minecraft:banners"])
		event.shapeless(Item.of('immersiveengineering:blueprint', '{blueprint:"molds"}'), ["immersiveengineering:blueprint", "#forge:plates/iron"])
		event.shapeless(Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'), ["immersiveengineering:blueprint", "copper_ingot", "#forge:ingots/aluminum", "iron_ingot"])
		event.shapeless(Item.of('immersiveengineering:blueprint', '{blueprint:"bullet"}'), ["immersiveengineering:blueprint", "gunpowder", "gunpowder", "immersiveengineering:empty_casing"])
	}

	// biomesoplenty:brimstone
	minecraft.crafting_shaped("biomesoplenty:brimstone", [
		"##",
		"##"
	], {
		"#": "#forge:dusts/sulfur"
	}).id("biomesoplenty:crafting/brimstone")
	create.crushing(["2x #forge:dusts/sulfur", Item.of("#forge:dusts/sulfur").withChance(0.5)], "biomesoplenty:brimstone").id("biomesoplenty:crushing/sulfur")

	// AE2
	{
		immersiveengineering.metal_press("ae2:printed_silicon", "#forge:silicon", "ae2:silicon_press")
		immersiveengineering.metal_press("ae2:printed_logic_processor", "#forge:ingots/gold", "ae2:logic_processor_press")
		immersiveengineering.metal_press("ae2:printed_calculation_processor", "ae2:certus_quartz_crystal", "ae2:calculation_processor_press")
		immersiveengineering.metal_press("ae2:printed_engineering_processor", "diamond", "ae2:engineering_processor_press")
	}

	// 削除関連
	{
		// 特定のレシピを削除
		/**
		 * @type {Special.RecipeId}
		 */
		let removeRecipeID = [
			"immersiveengineering:crafting/coke_to_coal_coke",
			"createchromaticreturn:carbon_powder_recipe",
			"ae2:inscriber/certus_quartz_dust",
			"immersiveengineering:crafting/pickaxe_steel",
			"immersiveengineering:crafting/axe_steel",
			"immersiveengineering:crafting/shovel_steel",
			"immersiveengineering:crafting/hoe_steel",
			"immersiveengineering:crafting/sword_steel",
			"minecraft:compacting/cast_iron_ingot",
			"createdeco:cast_iron_ingot_from_cast_iron_block",
			"create:item_application/copper_casing_from_log_using_deployer",
			"create:item_application/copper_casing_from_wood_using_deployer",
			"create:item_application/copper_casing_from_log",
			"create:item_application/copper_casing_from_wood",
			"minecraft:compacting/cast_iron_block",
		]
		removeRecipeID.forEach(element => {
			event.remove({ id: element });
		})

		// レシピタイプを削除
		global.deleteRecipeType.forEach(element => {
			event.remove({ type: element });
		})
		// アイテムを削除
		global.deleteItem.forEach(element => {
			event.remove({ output: element });
			event.remove({ input: element });
		})
	}
})

ServerEvents.tags("item", tag => {
	tag.add("forge:storage_blocks/sulfur", "biomesoplenty:brimstone")

	tag.add("fabrication:nether_tools", ["golden_sword", "golden_pickaxe", "golden_axe", "golden_shovel", "golden_hoe"])
	tag.add("fabrication:nether_only_tools", ["netherite_sword", "netherite_pickaxe", "netherite_axe", "netherite_shovel", "netherite_hoe"])

	Ingredient.of(/(?!.*vertical).*slab(?!.*vert).*/).getItemIds().forEach(element=> tag.add("minecraft:slabs", element))
	Ingredient.of(/.*_vertical_slab/).getItemIds().forEach(element=> tag.add("quark:vertical_slabs", element))
	Ingredient.of(/.*_slab_vert/).getItemIds().forEach(element=> tag.add("quark:vertical_slabs", element))

	//tag.add("fabrication:nether_tools", ["ae2:nether_quartz_sword", "ae2:nether_quartz_pickaxe", "ae2:nether_quartz_axe", "ae2:nether_quartz_shovel", "ae2:nether_quartz_hoe"])

	/*
	tag.remove("curios:ring", ["botania:odin_ring", "botania:thor_ring", "botania:loki_ring"])
	tag.remove("curios:head", "botania:flight_tiara")
	tag.add("curios:super_curio", ["botania:odin_ring", "botania:thor_ring", "botania:loki_ring", "botania:flight_tiara"])
	*/

})

ServerEvents.tags("block", tag => {
	tag.add("farmersdelight:tray_heat_sources", ["decorative_blocks:brazier", "decorative_blocks:soul_brazier"])
})

ServerEvents.tags("fluid", event => {
})

ServerEvents.recipes((event) => {

	// 手元クラフトでしか作れないレシピ
	/**
	 * @type {Special.Item[]}
	 */
	let manual_only = [
		"immersiveengineering:hammer",
		"immersiveengineering:wirecutter",
		"glass_bottle",
		"bowl"
	]
	manual_only.forEach(element => {
		event.forEachRecipe({ input: element, type: "minecraft:crafting_shapeless" }, (recipe) => {
			recipe.id(`${recipe.getId()}_manual_only`);
		})
	})
	event.forEachRecipe({ type: "immersiveengineering:hammer_crushing" }, (recipe) => {
		recipe.id(`${recipe.getId()}_manual_only`);
	})
})

LootJS.modifiers(event => {
	event.addBlockLootModifier("#forge:ores").modifyLoot("#forge:raw_materials", item => {
		const replacement = AlmostUnified.getReplacementForItem(item);
		if (replacement.isEmpty()) {
			return item;
		}
		replacement.setCount(item.getCount());
		return replacement;
	});

	global.deleteItem.forEach(element => {
		event.addLootTypeModifier(LootType.CHEST).removeLoot(element)
	});

	// 草からドロップする藁を植物の繊維に変更
	event.addBlockLootModifier("grass").replaceLoot('farmersdelight:straw', 'kubejs:plant_fiber')
	event.addBlockLootModifier("tall_grass").replaceLoot('farmersdelight:straw', 'kubejs:plant_fiber')
})

// エンチャントを削除する
MoreJSEvents.filterEnchantedBookTrade(e => {
	e.remove(deleteEnchantType)
})
MoreJSEvents.filterAvailableEnchantments(e => {
	e.remove(deleteEnchantType)
})