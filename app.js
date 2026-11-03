const STORAGE_KEY = 'stationfall-field-terminal-v1';

const SETUP_BY_PLAYERS = {
  2: { characters: 12, identities: 3 },
  3: { characters: 12, identities: 3 },
  4: { characters: 12, identities: 2 },
  5: { characters: 14, identities: 2 },
  6: { characters: 15, identities: 2 },
  7: { characters: 17, identities: 2 },
  8: { characters: 19, identities: 2 },
  9: { characters: 20, identities: 2 }
};

const characters = [
  { id:'astrochimp', name:'Astrochimp', role:'Human · He/Him', code:'AC', accent:'#e6a84a', traits:['Tunnel Rat','Loyal'], ability:'Tunnel Rat · Loyal', abilityText:'May Step through Vents. Influencing Astrochimp requires returning all cubes and placing at least one more than before.', reveal:'Acrobatics grants ZeroBorn, allowing a Free Step or Airlock into zero Gravity instead of a Free Pickup or Drop.', objective:'Shiny Things — score for escaping, with bonuses for the Briefcase, Artifact, and a Gun.', start:'Kitchen', influence:5, bonus:'Friend: 2 points if Astrochimp is your Bonus Character and Escapes.', setup:'Place Astrochimp in Kitchen.', quirks:'Counts as Human.' },
  { id:'billionaire', name:'Billionaire', role:'Human · He/Him', code:'BL', accent:'#d9c678', traits:['Live Streams','Rich'], ability:'Live Streams · Rich', abilityText:'When Jammers are OFF, Billionaire and Fletcher act as if Lit with Cameras ON. Billionaire cannot be Bribed and may use his grey Bribes when Activated.', reveal:'Hollow Promises regains and/or returns all three grey Bribe tokens.', objective:'Survive — score for Billionaire and Fletcher escaping, with positioning bonuses.', start:'Suite', influence:3, bonus:'Friend: 2 points if Fletcher Escapes.', setup:'Billionaire starts in Suite with three grey Bribes; Fletcher starts in Security Station.', quirks:'Fletcher is an Item. Billionaire does not score unused Bribes.' },
  { id:'boarder', name:'Boarder', role:'Human · She/Her', code:'BO', accent:'#d96161', traits:['Breach','Fugitive'], ability:'Breach · Fugitive', abilityText:'May remove an adjacent Lock as an Action. Actions involving Boarder do not make a player Suspect.', reveal:'Missile targets an Unescaped Section when Jammers are OFF. Extricate flips the Rescue Ship to the Pirate Ship.', objective:'Loot — score for escaping, the Briefcase, and Live Humans remaining in Outer Space.', start:'Outer Space', influence:4, bonus:'Friend: 1 point if Boarder Escapes.', setup:'Place Boarder in Outer Space and the Rescue Ship beside Outer Space. Boarder starts with a Helmet, Gun, and Katana.', quirks:'Can win while Guilty and scores double for Possessed Bribes.' },
  { id:'botanist', name:'Botanist', role:'Human · He/Him', code:'BT', accent:'#8fc48f', traits:['Scientist','ZeroBorn'], ability:'Scientist · ZeroBorn', abilityText:'May perform a Free Section Action instead of Pickup/Drop, or use the free action to enter zero Gravity.', reveal:'Creatropism lets Fang Moss Free Step or consume a Down Colocated Human during Botanist’s Activation phase.', objective:'Blood Meal — score for Humans annihilated by Fang Moss and for Fang Moss or Botanist escaping.', start:'Hydroponics', influence:5, bonus:'Friend: 2 points if Fang Moss Escapes and Botanist does not.', setup:'Place Botanist and Fang Moss in Hydroponics; place the Feed Me! Ability token nearby.', quirks:'Fang Moss is an Item with special movement and consumption rules.' },
  { id:'colonel', name:'Colonel', role:'Human · He/Him', code:'CL', accent:'#d17259', traits:['Officer','Paranoid'], ability:'Officer · Paranoid', abilityText:'Officer crosses Locks outside Blackout. Influencing Colonel requires a Colocated Conspirator; Colonel cannot be Bribed.', reveal:'Mission First returns all of your Betrayal cubes to your pool.', objective:'Weapons Test — score for Colonel escaping, contaminated NPCs escaping, Project X release, and X-Secret escape.', start:'Security Station', influence:4, bonus:'Friend: 2 points if Colonel Escapes.', setup:'Place Colonel in Security Station. Connect the Panic Pod to Quarters with a Lock and Gun. Colonel starts with a Gun.', quirks:'Adds the Panic Pod and its launch action.' },
  { id:'consort', name:'Consort', role:'Robot · They/Them', code:'CO', accent:'#b2a0d2', traits:['Fast Talk','Mimic Frameup'], ability:'Fast Talk · Mimic Frameup', abilityText:'Cannot be Attacked by Humans with a Bludgeon in Lit Sections. May redirect Suspicion after Downing a Human in a Lit Section.', reveal:'Shapeshift Switch swaps location and non-Integral Possessions with an eligible Human or Robot NPC.', objective:'New Life — score for specific Stationfall positioning, the Briefcase, and delaying Reveal.', start:'Rec Room', influence:6, bonus:'Friend: 2 points if Consort Escapes.', setup:'Place Consort in Rec Room.', quirks:'Reveal swaps both location and non-Integral Possessions.' },
  { id:'corpsicle', name:'Corpsicle', role:'Human · She/Her', code:'CP', accent:'#93b7cf', traits:['Vengeful','Dying'], ability:'Vengeful · Dying', abilityText:'Kompromat grants a Bludgeon and can be used while Down, reviving Corpsicle. Corpsicle cannot be Activated while Exhausted.', reveal:'Last Gasp Revives Corpsicle if Down or performs an Action.', objective:'Miracle Cure — score for escaping with Nanogel, X-Secret escape, and keeping Project X unreleased.', start:'Cryo Lab', influence:5, bonus:'Friend: 3 points if Corpsicle Escapes.', setup:'Place Corpsicle Down in Cryo Lab with an Integral Helmet.', quirks:'Starts Down.' },
  { id:'counselor', name:'Counselor', role:'Human · He/Him', code:'CN', accent:'#b98bbf', traits:['Officer','Wormtongue'], ability:'Officer · Wormtongue', abilityText:'Officer crosses Locks outside Blackout. Wormtongue moves a cube on a Colocated Human to Betrayal.', reveal:'Recorded Confessional can make other Innocent players Suspect based on a Colocated Human.', objective:'Cloak and Dagger — score for Counselor and Artifact escape, Kompromat advantage, and low Betrayal.', start:'Therapy Garden', influence:6, bonus:'Friend: 2 points if Counselor Escapes.', setup:'Place Counselor in Therapy Garden. Connect the locked Shred Room to Therapy Garden.', quirks:'Adds the Shred Room and its Data Mine action.' },
  { id:'cyborg', name:'Cyborg', role:'Human and Robot · He/Him', code:'CY', accent:'#86b5c4', traits:['Uncanny','Fugitive'], ability:'Uncanny · Fugitive', abilityText:'Requires two Activation discs to become Exhausted. Actions involving Cyborg do not make a player Suspect.', reveal:'Brutal can break a Helmet with a Bludgeon; Self-Repair allows a Down Cyborg to Activate and Revive.', objective:'Revenge — score for Down Officers, stopping Human PCs and Contamination from escaping, and releasing Project X.', start:'Cryo Lab', influence:4, bonus:'Grudge: 2 points if Cyborg is not Live at Stationfall.', setup:'Place Cyborg in Cryo Lab.', quirks:'Counts as both Human and Robot and can win while Guilty.' },
  { id:'daredevil', name:'Daredevil', role:'Human · She/Her', code:'DD', accent:'#e4874f', traits:['Pride','Adrenaline'], ability:'Pride · Adrenaline', abilityText:'Cannot be Robbed. Hazards do not Down Daredevil, and entering a Hazard is always free.', reveal:'Point Break can Escape Daredevil at Stationfall with a Helmet and Rocket Wings.', objective:'Thrillseeker — score for escaping, being the only Human escapee, the Artifact or Contamination, and Project X release.', start:'Locker Room', influence:5, bonus:'Friend: 2 points if Daredevil Escapes.', setup:'Place Daredevil in Locker Room, Rocket Wings in Physics Lab, and its Launch action under Outer Space.', quirks:'Adds Rocket Wings and the Rocket Wings Launch action.' },
  { id:'digital-assistant', name:'Digital Assistant', role:'Data · It', code:'DA', accent:'#78b8d0', traits:['AI','Helpful'], ability:'AI · Helpful', abilityText:'Can only perform Console Actions. Its possessor gains Officer for Section Actions and can launch Pods without Abandon Ship. Only one cube per player may be placed here.', reveal:'Root Access controls a Robot carrying Digital Assistant. Trojan Horse copies it to an eligible Evidence or X-Secret carrier.', objective:'Proliferate — score for escaped Robots, Offsite or escaped Humans, and multiple escaped copies carrying Digital Assistant.', start:'General supply', influence:5, bonus:'Friend: 2 points if Digital Assistant Escapes.', setup:'Place Digital Assistant tokens by the supply, Mainframe token on Mainframe, and Lockdown under Console Actions.', quirks:'Data that can be Manufactured in Mainframe; cannot Possess Items or Data.' },
  { id:'doctor-hyde', name:'Doctor (Hyde)', role:'Human · She/Her', code:'DH', accent:'#d36b72', traits:['Scientist','Split'], ability:'Scientist · Split', abilityText:'May perform a Free Section Action instead of Pickup/Drop. Doctor has two Identity Cards.', reveal:'ZipGun grants a Gun upon Reveal.', objective:'Cruelty — score for escaping with the Briefcase and for escaping Live in a Pod with a Down Human.', start:'Forward Hub', influence:5, bonus:'Friend: 2 points if Doctor Escapes.', setup:'Place Doctor in Forward Hub with X-Secret. Shuffle both Doctor Identity Cards into the deal.', quirks:'Doctor can be the Player Character of two players; each Identity Card has its own Agenda.' },
  { id:'doctor-jekyll', name:'Doctor (Jekyll)', role:'Human · She/Her', code:'DJ', accent:'#89b5a2', traits:['Scientist','Split'], ability:'Scientist · Split', abilityText:'May perform a Free Section Action instead of Pickup/Drop. Doctor has two Identity Cards.', reveal:'Fake Artifact moves the Artifact to Doctor unless a Player Character possesses it.', objective:'Science — score for escaping, being Contaminated, possessing the Artifact, and keeping Evidence from News and Authorities.', start:'Forward Hub', influence:5, bonus:'Friend: 2 points if Doctor Escapes.', setup:'Place Doctor in Forward Hub with X-Secret. Shuffle both Doctor Identity Cards into the deal.', quirks:'Doctor can be the Player Character of two players; each Identity Card has its own Agenda.' },
  { id:'drones', name:'Drones', role:'Robot · It/Them/They', code:'DR', accent:'#9aadb5', traits:['Disassemble','Remote Control'], ability:'Disassemble · Remote Control', abilityText:'A Drone may Down itself to Repair a Colocated Section or Robot. Drones are controlled only through the Remote Control Console Action.', reveal:'None.', objective:'No Agenda — Drones have no Identity Card and cannot be a Bonus Character.', start:'Physics Lab and Outer Space', influence:null, bonus:'Drones cannot be anyone’s Bonus Character.', setup:'Place one Drone in Physics Lab and one in Outer Space, each with an Integral Bludgeon. Add Remote Control to Console Actions.', quirks:'No Identity Card; never Activated and therefore never receive a Free Pickup or Drop.' },
  { id:'engineer', name:'Engineer', role:'Human · He/Him', code:'EN', accent:'#ddbb55', traits:['Officer','Jury Rig'], ability:'Officer · Jury Rig', abilityText:'Officer crosses Locks outside Blackout. Jury Rig Repairs a Colocated Damaged Section or Down Robot.', reveal:'Overload places a time marker in an Unescaped Section; that Section is Damaged when it resolves.', objective:'Preserve Ecosphere — score for detonating Antimatter On Board, stopping Contamination and Artifact escape, and remaining Innocent.', start:'Array Control', influence:5, bonus:'Grudge: 2 points if Engineer is not Live at Stationfall.', setup:'Place Engineer in Array Control and the Reactor token on Reactor.', quirks:'The Reactor token changes Reactor damage and Asphyxiation rules.' },
  { id:'exile', name:'Exile', role:'Human · He/Him', code:'EX', accent:'#a79a76', traits:['Fast Talk','Hacker'], ability:'Fast Talk · Hacker', abilityText:'Protected from Human Bludgeon attacks in Lit Sections. May use a Free Console Action; with Jammers OFF, may do so from any Section.', reveal:'Blood From a Stone returns Kompromat used on an NPC. Tradecraft exchanges two Kompromat for one from a previously used NPC.', objective:'Back in the Game — score for escaping with Kompromat from escaped Characters and Evidence that News lacks.', start:'Array Control', influence:6, bonus:'Friend: 2 points if Exile Escapes.', setup:'Place Exile in Array Control.', quirks:'Focuses on collecting and reusing Kompromat.' },
  { id:'inspector', name:'Inspector', role:'Human · They/Them', code:'IN', accent:'#82b0a0', traits:['Investigator','Badge'], ability:'Investigator · Badge', abilityText:'May Pickup Kompromat or Manufacture Data from adjacent Sections. May Rob Items as though carrying a Gun.', reveal:'Offshore Shenanigans regains Inspector’s Bribe if it has been used.', objective:'Dirty — score for escaping with the Briefcase and for Evidence reaching Authorities but not News.', start:'Chem Lab', influence:4, bonus:'Friend: 2 points if Inspector Escapes.', setup:'Place Inspector in Chem Lab and flip the Hail Mary Pod to the Inspector Shuttle side.', quirks:'The Inspector Shuttle requires Inspector or a Live Character with Jury Rig to launch.' },
  { id:'legal', name:'Legal', role:'Robot · It', code:'LG', accent:'#adb7c0', traits:['Process Server','Lawyer Up'], ability:'Process Server · Lawyer Up', abilityText:'Manufactures NDA for all Colocated Humans and Robots. May change a Colocated Innocent or Guilty Player Character to Suspect.', reveal:'Fine Print allows activation of NPCs carrying NDA. Hardcopy lets a Colocated Character Manufacture NDA.', objective:'Reduce Corporate Liability — score for Humans escaping with NDA, stopping non-NDA escapes, suppressing Evidence, and Suspect PCs.', start:'Aft Hub', influence:4, bonus:'Grudge: 1 point if Legal is not Live at Stationfall.', setup:'Place Legal in Aft Hub. Flip Alcatraz, Houdini, and McQueen to require NDA; place NDA tokens by the supply.', quirks:'NDA is Data with restrictions on copying, deleting, delivering, and robbing.' },
  { id:'maintenance-clones', name:'Maintenance Clones', role:'Human · They/Them', code:'MC', accent:'#d7b969', traits:['ZeroBorn','Jury Rig'], ability:'ZeroBorn · Jury Rig', abilityText:'May use the free action to enter zero Gravity. Jury Rig Repairs a Colocated Damaged Section or Down Robot.', reveal:'Go Go Go! immediately performs an Action with every Live, Unescaped Clone.', objective:'Prove Clones Exist — score for Clone escapes and Evidence reaching News.', start:'Fuel Cells, Kitchen, and Quarters', influence:5, bonus:'1 point per escaped Clone, plus 1 if all three escape.', setup:'Place one Clone in Fuel Cells, one in Kitchen, and one in Quarters.', quirks:'Only one Clone acts per Activation; each has Item Limit 2 and separate Data.' },
  { id:'medical', name:'Medical', role:'Robot · It/They/Them', code:'ME', accent:'#d4e2df', traits:['Emergency Response','Helpful'], ability:'Emergency Response · Helpful', abilityText:'May Revive a Human as an Action and moves freely into Sections with Down Humans. Only one cube per player may be placed here.', reveal:'Haywire grants a Bludgeon.', objective:'Be Really Useful — score for having no Down Humans On Board and for Revivals or Betrayal cubes recorded on Medical’s tracker.', start:'Aft Hub', influence:4, bonus:'Grudge: 1 point if Medical is not Live at Stationfall.', setup:'Place Medical in Aft Hub with its score marker off the card at zero.', quirks:'Advance the tracker for each Human Revival by Medical and each cube moved to Betrayal when Medical Reveals.' },
  { id:'microbiologist', name:'Microbiologist', role:'Human · She/Her', code:'MB', accent:'#77c19a', traits:['Scientist','Loyal'], ability:'Scientist · Loyal', abilityText:'May perform a Free Section Action instead of Pickup/Drop. Influencing requires returning all cubes and placing at least one more.', reveal:'Infect Contaminates a Colocated Human or Robot, forcing an Item drop if needed.', objective:'Sentient Pathogen — score for Microbiologist, Contaminated Characters, and X-Secret escaping.', start:'Physics Lab', influence:5, bonus:'Friend: 2 points if Microbiologist Escapes.', setup:'Place Microbiologist in Physics Lab.', quirks:'Infect can force a target at Item Limit to Drop an Item.' },
  { id:'operative', name:'Operative', role:'Human · She/Her', code:'OP', accent:'#7f94a6', traits:['EMP Burst','Officer','Nerve Gas Grenades'], ability:'EMP Burst · Officer · Nerve Gas Grenades', abilityText:'Can Damage her Section to Down Robots and Delete Data, cross Locks outside Blackout, and place Asphyxiation in her Section or a throwable target.', reveal:'Claymore secretly places three trap tokens in different Sections; the real trap Downs the first entering Human, Robot, or Monster.', objective:'Coverup — score for stopping Evidence, X-Secret, Innocent PCs, Contaminated Characters, and Robots from escaping.', start:'Suite', influence:5, bonus:'Grudge: 2 points if Operative is not Live at Stationfall.', setup:'Place Operative in Suite and keep the three trap tokens by her card.', quirks:'Traps never trigger Suspicion, Guilt, or Self-Preservation.' },
  { id:'security', name:'Security', role:'Robot · It', code:'SE', accent:'#8e9da7', traits:['Peacekeeper','Armored'], ability:'Peacekeeper · Armored', abilityText:'May only Attack Fugitives, Monsters, or non-Innocent PCs and may not Sabotage. Cannot be Attacked or Robbed by Bludgeon.', reveal:'Authorized Force removes Peacekeeper.', objective:'Peace Through Superior Firepower — score for relevant Down targets On Board and for keeping the Briefcase and Artifact from escaping.', start:'Print Shop', influence:4, bonus:'Grudge: 3 points if Security is not Live at Stationfall.', setup:'Place Security in Print Shop with an Integral Gun.', quirks:'Boarder and Cyborg are Fugitives.' },
  { id:'station-chief', name:'Station Chief', role:'Human · She/Her', code:'SC', accent:'#cf8d67', traits:['Officer','Pride'], ability:'Officer · Pride', abilityText:'Officer crosses Locks outside Blackout. Station Chief cannot be Robbed.', reveal:'Forceful Presence performs a Free Basic Action with a Colocated NPC or an NPC Officer anywhere.', objective:'Go Down with the Ship — score for other Human escapes, escaped NPC Officers, and Station Chief remaining Live On Board.', start:'Therapy Garden', influence:5, bonus:'Grudge: 2 points if Station Chief is not Live at Stationfall.', setup:'Place Station Chief in Therapy Garden and connect the Medevac Pod to Forward Airlocks.', quirks:'Medevac Pod needs a Down Human occupant but does not require Abandon Ship.' },
  { id:'stowaway', name:'Stowaway', role:'Human · She/Her', code:'ST', accent:'#b6a286', traits:['Tunnel Rat','Hacker'], ability:'Tunnel Rat · Hacker', abilityText:'May Step through Vents and use a Free Console Action; with Jammers OFF, Console Actions can be performed from any Section.', reveal:'Secret Cache grants a Helmet to Stowaway or one of her Conspirators.', objective:'Scoop of a Lifetime — score for News receiving X-Secret and Evidence, plus Stowaway escaping with exclusive Evidence.', start:'Off board', influence:4, bonus:'Friend: 2 points if Stowaway Escapes.', setup:'Keep the Stowaway pawn on her Character Card, off the board.', quirks:'Begins off board and enters through her special rules.' },
  { id:'stranger', name:'Stranger', role:'Human · They/Them', code:'SR', accent:'#8f88aa', traits:['Uncanny','Enigma'], ability:'Uncanny · Enigma', abilityText:'Requires two Activation discs to become Exhausted. A Schrödinger Reveal as Stranger retains the discarded cards as Bonus Characters but loses Uncanny.', reveal:'Homework may Reveal your Bonus Character and perform one Action with them.', objective:'It’s Personal — score for delaying Reveal, possessing X-Secret, scoring Bonus Points, and being near a Bonus Character.', start:'Nanofactory', influence:6, bonus:'Friend: 2 points if Stranger Escapes.', setup:'Place Stranger in Nanofactory.', quirks:'Schrödinger Reveal preserves Bonus Characters.' },
  { id:'telepathic-rat', name:'Telepathic Rat', role:'Item · It', code:'TR', accent:'#cf9a86', traits:['Telepathy','Paranoid'], ability:'Telepathy · Paranoid', abilityText:'May perform an Action through a Colocated Unhelmeted Human, ignoring Self-Preservation. Influencing requires a Colocated Conspirator; cannot be Bribed.', reveal:'My Precious prevents other players from Throwing, Airlocking, or Dropping the Rat.', objective:'Penance — score for Colocated Down Characters and their Kompromat, plus the Artifact and Briefcase.', start:'Bio Lab', influence:8, bonus:'Friend: 2 points if Telepathic Rat Escapes.', setup:'Place Telepathic Rat Contaminated in Bio Lab.', quirks:'An Item that cannot Possess Items or Data, cannot be Attacked or Downed, and can be Picked Up, Dropped, or Thrown.' },
  { id:'troubleshooter', name:'Troubleshooter', role:'Human · She/Her', code:'TS', accent:'#e5bd68', traits:['Tunnel Rat','Jury Rig'], ability:'Tunnel Rat · Jury Rig', abilityText:'May Step through Vents and Repair a Colocated Damaged Section or Down Robot.', reveal:'Talk Them Through It gives all Conspirators Jury Rig and Tunnel Rat during your turn while Troubleshooter is Live.', objective:'Pristine ’til the End — score for unarmed Antimatter, unreleased Project X, undamaged Sections, and Live Robots.', start:'Print Shop', influence:6, bonus:'Friend: 2 points if Troubleshooter Escapes.', setup:'Place Troubleshooter in Print Shop with a Bludgeon and connect Cargo Claw to Forward Airlocks.', quirks:'Cargo Claw adds Grip, which retrieves an Item or Down Character from Outer Space.' }
];

const agendas = {
  'astrochimp': { title:'Shiny Things', items:[{ text:'3 points if Astrochimp Escapes', children:['+2 points if in Possession of Briefcase','+2 points if in Possession of Artifact','+2 points if in Possession of a Gun'] }] },
  'billionaire': { title:'Survive', items:[{ text:'4 points if Billionaire Escapes', children:['+1 point if not Colocated with Live Humans or Robots at Stationfall'] },{ text:'2 points if Fletcher Escapes', children:['+1 point if Fletcher and Billionaire are Colocated when Escaping'] },{ text:'Billionaire does not score Possessed or unused Bribes', note:true }] },
  'boarder': { title:'Loot', items:[{ text:'2 points if Boarder Escapes', children:['+4 points if Boarder Possesses Briefcase, or Briefcase is in Outer Space at Stationfall','+1 point for every Live Human in Outer Space at Stationfall'] }] },
  'botanist': { title:'Blood Meal', items:[{ text:'2 points for every Human Annihilated by Fang Moss' },{ text:'2 points if Fang Moss Escapes' },{ text:'2 points if Botanist Escapes', children:['+1 point if Contaminated'] }] },
  'colonel': { title:'Weapons Test', items:[{ text:'3 points if Colonel Escapes' },{ text:'2 points if at least one Contaminated NPC Escapes' },{ text:'2 points if Project X is released' },{ text:'2 points if X-Secret Escapes' }] },
  'consort': { title:'New Life', items:[{ text:'0 points if Consort Escapes', children:['+3 points if not Colocated with a Live Human or Robot at Stationfall','+3 points if Consort Possesses Briefcase','+1 point if Secret Identity is not Revealed until Stationfall'] }] },
  'corpsicle': { title:'Miracle Cure', items:[{ text:'3 points if Corpsicle Escapes', children:['+2 points if Corpsicle Possesses Nanogel','+2 points if X-Secret Escapes','+2 points if Project X is not released'] }] },
  'counselor': { title:'Cloak and Dagger', items:[{ text:'2 points if Counselor Escapes' },{ text:'4 points if Artifact Escapes' },{ text:'2 points if you have more Kompromat than any other player at Stationfall' },{ text:'1 point if you have the least cubes in Betrayal at Stationfall' }] },
  'cyborg': { title:'Revenge', items:[{ text:'1 point for each Character with Officer that is Down at Stationfall' },{ text:'2 points if no Human Player Characters Escape' },{ text:'2 points if no Contamination Escapes' },{ text:'2 points if Project X was released' }] },
  'daredevil': { title:'Thrillseeker', items:[{ text:'3 points if Daredevil Escapes', children:['+2 points if Daredevil is the only Human that Escapes','+2 points if Daredevil Possesses Artifact or is Contaminated'] },{ text:'1 point if Project X was released' }] },
  'digital-assistant': { title:'Proliferate', items:[{ text:'2 points for every Escaped Robot that Possesses Digital Assistant' },{ text:'1 point for every Offsite or Escaped Human that Possesses Digital Assistant' },{ text:'2 points if at least two copies of Digital Assistant Escape' }] },
  'doctor-hyde': { title:'Cruelty', items:[{ text:'2 points if Doctor Escapes', children:['+3 points if Doctor Possesses Briefcase','+4 points if Doctor Escaped Live in a Pod with a Down Human'] }] },
  'doctor-jekyll': { title:'Science', items:[{ text:'1 point if Doctor Escapes', children:['+3 points if Doctor is Contaminated','+3 points if Doctor Possesses Artifact'] },{ text:'3 points if News and Authorities do not have Evidence at Stationfall' }] },
  'drones': { title:'None', items:[{ text:'Drones have no Identity Card and no Agenda', note:true }] },
  'engineer': { title:'Preserve Ecosphere', items:[{ text:'3 points if Antimatter detonates On Board before Stationfall' },{ text:'3 points if no Contaminated Characters Escape' },{ text:'2 points if Artifact does not Escape' },{ text:'1 point if Innocent; Engineer may still win if Guilty' }] },
  'exile': { title:'Back in the Game', items:[{ text:'2 points if Exile Escapes', children:['+2 points for each Possessed Kompromat belonging to an Escaped Character','+3 points if Exile has Evidence and News does not'] }] },
  'inspector': { title:'Dirty', items:[{ text:'2 points if Inspector Escapes', children:['+4 points if Inspector Possesses Briefcase'] },{ text:'1 point if Authorities end with Evidence', children:['+2 points if News does not'] }] },
  'legal': { title:'Reduce Corporate Liability', items:[{ text:'1 point for each Human that Escapes with NDA' },{ text:'4 points if no Humans Escape, or all Escaped Humans have NDA' },{ text:'2 points if Evidence does not Escape' },{ text:'1 point for each Suspect (not Guilty) Player Character at Stationfall' }] },
  'maintenance-clones': { title:'Prove Clones Exist', items:[{ text:'1 point if a Clone Escapes', children:['+4 points if at least two Clones Escape','+2 points if News ends with Evidence'] }] },
  'medical': { title:'Be Really Useful', items:[{ text:'2 points if no Down Humans are On Board at Stationfall' },{ text:'1 point for each star reached on Medical’s tracker', children:['Advance once for every Human Revival performed by Medical','Advance once for every cube moved to Betrayal upon Medical’s Reveal'] }] },
  'microbiologist': { title:'Sentient Pathogen', items:[{ text:'2 points if Microbiologist Escapes' },{ text:'1 point for every Contaminated Character that Escapes' },{ text:'2 points if X-Secret Escapes' }] },
  'operative': { title:'Coverup', items:[{ text:'2 points if Evidence does not Escape' },{ text:'2 points if X-Secret does not Escape' },{ text:'2 points if no Innocent Player Characters Escape' },{ text:'2 points if no Contaminated Characters Escape' },{ text:'1 point if no Robots Escape' }] },
  'security': { title:'Peace Through Superior Firepower', items:[{ text:'1 point per Down Fugitive, Monster, or non-Innocent Player Character On Board at Stationfall' },{ text:'1 point per Down Human with a Bludgeon or Gun On Board at Stationfall' },{ text:'1 point if Briefcase does not Escape' },{ text:'1 point if Artifact does not Escape', children:['+1 point if both Briefcase and Artifact do not Escape'] }] },
  'station-chief': { title:'Go Down with the Ship', items:[{ text:'1 point for every other Human that Escapes', children:['+1 point per NPC with Officer that Escapes'] },{ text:'2 points if Station Chief is On Board and Live at Stationfall' }] },
  'stowaway': { title:'Scoop of a Lifetime', items:[{ text:'2 points if News ends with X-Secret' },{ text:'2 points if News ends with Evidence' },{ text:'2 points if Stowaway Escapes', children:['+3 points if Stowaway Escapes with Evidence and no other Character does'] }] },
  'stranger': { title:'It’s Personal', items:[{ text:'1 point if Secret Identity is not Revealed until Stationfall' },{ text:'1 point if Stranger Possesses X-Secret' },{ text:'2 points if you score Bonus Points' },{ text:'2 points if Stranger is Live and Colocated with one of your Bonus Characters at Stationfall' }] },
  'telepathic-rat': { title:'Penance', items:[{ text:'1 point for each Down Human or Robot Colocated with Telepathic Rat at Stationfall', children:['+2 points for each Possessed Kompromat belonging to those Colocated Down Characters'] },{ text:'2 points if Telepathic Rat is Colocated with Artifact at Stationfall' },{ text:'2 points if Telepathic Rat is Colocated with Briefcase at Stationfall' }] },
  'troubleshooter': { title:'Pristine ’til the End', items:[{ text:'2 points if Antimatter is not Armed at Stationfall' },{ text:'2 points if Project X was never released' },{ text:'2 points if no Sections are Damaged at Stationfall' },{ text:'1 point for each Live Robot at Stationfall' }] }
};

characters.forEach(character => { character.agenda = agendas[character.id]; });

const abilityDescriptions = {
  'Tunnel Rat':'May Step through Vents.',
  'Loyal':'To Influence this Character, return all cubes on the card and place at least one more cube than was previously there.',
  'Live Streams':'If Jammers are OFF, Billionaire’s and Fletcher’s Sections act as if Lit and Cameras are ON.',
  'Rich':'Cannot be Bribed. When Activated, a grey Bribe may be used instead of the active player’s own Bribe; grey Bribes only score if Billionaire Escapes.',
  'Breach':'As an Action, may remove an adjacent Lock.',
  'Fugitive':'No actions taken with or against this Character make a player Suspect.',
  'Scientist':'May perform a Free Section Action instead of a Free Pick Up or Drop.',
  'ZeroBorn':'May Free Step or Airlock into a zero Gravity Section instead of a Free Pick Up or Drop.',
  'Officer':'If not Blackout, may Step - or, if Down, be Dragged - through Locks, which are then removed.',
  'Paranoid':'To Influence this Character, the active player must have a Colocated Conspirator. This Character cannot be Bribed.',
  'Fast Talk':'Cannot be Attacked by Humans with a Bludgeon in Lit Sections.',
  'Mimic Frameup':'After Downing a Human in a Lit Section, the active player may choose another player with a Colocated Conspirator to become Suspect instead.',
  'Vengeful':'Using Corpsicle’s Kompromat also gives her a Bludgeon. It may be used while she is Down and immediately Revives her.',
  'Dying':'May not be Activated while Exhausted and receives no Free Pick Up or Drop when Activated.',
  'Wormtongue':'As an Action, move a cube on a Colocated Human’s card to Betrayal.',
  'Uncanny':'It takes two Activation discs for this Character to become Exhausted.',
  'Pride':'This Character cannot be Robbed.',
  'Adrenaline':'Hazards do not Down Daredevil. A Step or Airlock into a Section with a Hazard is always free.',
  'AI':'Can only perform Console Actions. A Character Possessing Digital Assistant has Officer for Section Actions and does not require Abandon Ship to launch a Pod.',
  'Helpful':'No player may have more than one Influence cube on this Character.',
  'Split':'Has two Identity Cards.',
  'Disassemble':'As an Action, may become Down to Repair a Colocated Section or Robot.',
  'Remote Control':'Cannot be Bribed, Influenced, or Activated directly. A Console Action may perform an Action with any Live Drone.',
  'Jury Rig':'As an Action, Repair a Colocated Damaged Section or Down Robot.',
  'Hacker':'May perform a Free Console Action instead of a Free Pick Up or Drop. If Jammers are OFF, may perform Console Actions in any Section.',
  'Investigator':'Can Pick Up Kompromat or Manufacture Data from adjacent Sections.',
  'Badge':'May Rob Items as if in Possession of a Gun.',
  'Process Server':'As an Action, Manufacture NDA into the Possession of all Colocated Humans and Robots.',
  'Lawyer Up':'As an Action, may change a Colocated Innocent or Guilty Player Character’s status to Suspect.',
  'Emergency Response':'As an Action, may Revive a Human. A Step or Airlock into a Section with a Down Human is always free.',
  'EMP Burst':'Damage Operative’s Section, Down all Robots in it, and Delete all Colocated Data.',
  'Nerve Gas Grenades':'As an Action, place Asphyxiation in Operative’s Section or a Section she can Throw to.',
  'Peacekeeper':'May only Attack Fugitives, Monsters, or non-Innocent Player Characters. May not Sabotage.',
  'Armored':'Cannot be Attacked or Robbed by a Bludgeon.',
  'Enigma':'A Schrödinger Reveal as Stranger does not discard any cards; retain them as Bonus Characters. Stranger then loses Uncanny.',
  'Telepathy':'Perform an Action with a Colocated Unhelmeted Human, ignoring Self-Preservation. Telepathic Rat may only perform Telepathy Actions.'
};

characters.forEach(character => {
  character.abilityDetails = character.traits.map(name => ({ name, description:abilityDescriptions[name] || '' }));
});

const locations = [
  { id:'command', name:'Command Deck', deck:'A-01', zone:'Command', description:'Station control, executive systems, and the best overview of a worsening situation.', tags:['Authority','Comms'] },
  { id:'security', name:'Security', deck:'A-03', zone:'Command', description:'Restricted records, weapons lockers, and surveillance access converge here.', tags:['Secure','Armed'] },
  { id:'flight', name:'Flight Deck', deck:'A-06', zone:'Command', description:'The quickest route to a shuttle—assuming launch control still answers.', tags:['Escape','Navigation'] },
  { id:'infirmary', name:'Infirmary', deck:'B-02', zone:'Habitat', description:'Medical supplies and treatment beds for injuries that cannot wait.', tags:['Medical','Recovery'] },
  { id:'executive', name:'Executive Suite', deck:'B-04', zone:'Habitat', description:'Private quarters with privileged access and expensive secrets.', tags:['Private','Influence'] },
  { id:'hydroponics', name:'Hydroponics', deck:'B-08', zone:'Habitat', description:'Dense cultivated growth, experimental flora, and several concealed paths.', tags:['Biological','Hazard'] },
  { id:'engineering', name:'Engineering', deck:'C-01', zone:'Systems', description:'The station heartbeat: power routing, damage control, and catastrophic failure.', tags:['Technical','Power'] },
  { id:'machine', name:'Machine Shop', deck:'C-03', zone:'Systems', description:'Tools, spare parts, and just enough machinery to improvise a solution.', tags:['Repair','Fabrication'] },
  { id:'maintenance', name:'Maintenance', deck:'C-07', zone:'Systems', description:'Narrow service corridors connecting the places passengers never see.', tags:['Hidden','Technical'] },
  { id:'bio-lab', name:'Bio Lab', deck:'D-02', zone:'Research', description:'Specimens, analysis equipment, and protocols that are no longer holding.', tags:['Science','Creature'] },
  { id:'psi-lab', name:'Psi Lab', deck:'D-05', zone:'Research', description:'Shielded chambers designed to keep thoughts from leaking into the station.', tags:['Psionic','Restricted'] },
  { id:'containment', name:'Containment', deck:'D-09', zone:'Research', description:'Heavy seals surround whatever the research team decided must not escape.', tags:['Secure','Alien'] },
  { id:'cargo', name:'Cargo Hold', deck:'E-03', zone:'Industrial', description:'Crates, contraband, loading equipment, and a direct route toward the docks.', tags:['Items','Escape'] },
  { id:'docking', name:'Docking Bay', deck:'E-06', zone:'Industrial', description:'Visiting craft and outbound traffic meet under increasingly unreliable clamps.', tags:['Escape','Public'] },
  { id:'waste', name:'Waste Processing', deck:'E-09', zone:'Industrial', description:'Noisy, unpleasant, and ideal for anyone trying not to be found.', tags:['Hidden','Hazard'] }
];

const projects = [
  { id:'carnivorous-bioexperiment', name:'Carnivorous Bioexperiment', status:'DERAILED COMBAT ENTITY TEST', summary:'A self-preserving Monster that hunts the nearest Live Human and is vulnerable to Hazards.', lead:'Place the Monster in Vault X.', abilities:['Tunnel Rat','Wary'], instructions:'After each Resolve phase it Downs a Live Colocated Human if possible; otherwise it moves one Section toward the nearest Live Human.' },
  { id:'combat-swarm', name:'Combat Swarm', status:'REMOTE CONTROL MURDER DRONES', summary:'A Robot swarm controlled through Console Actions that moves, attacks as if armed with a Gun, or uses Jury Rig.', lead:'Place the Monster in Vault X and Direct Swarm under Console Actions.', abilities:['Agile','Jury Rig'], instructions:'It can only Step, Drag, Attack, or Jury Rig. It is Downed only by entering undamaged Magnetic Containment.' },
  { id:'death-ray', name:'Death Ray', status:'FULLY OPERATIONAL BATTLE STATION', summary:'A station weapon that annihilates an Offsite, Rescue/Pirate Ship, or launched Pod and everything on it.', lead:'Place the Death Ray token in Array Control.', abilities:[], instructions:'A Human or Robot in Array Control may fire it if Reactor and Array Control are undamaged. Firing damages Reactor.' },
  { id:'entropy-phantom', name:'Entropy Phantom', status:'AN ENERGY GHOST', summary:'An incorporeal Monster that consumes Influence, deletes Colocated Data, and drifts toward Antimatter.', lead:'Place the Monster in Vault X.', abilities:['Tunnel Rat','Ethereal'], instructions:'After each Resolve it moves a Colocated cube to Betrayal if possible; otherwise it advances toward Antimatter. It cannot be Downed.' },
  { id:'grey-goo', name:'Grey Goo', status:'EXPANDING NANO-SLIME', summary:'A spreading effect centered on Vault X that destroys Helmets or Downs exposed Characters.', lead:'Give the card to the acting player and set the Grey Goo marker to 0.', abilities:[], instructions:'At that player’s Resolve, affect Characters within the current spread, then increase spread unless Blackout. At spread 5, proceed to Stationfall.' },
  { id:'robotic-assassin', name:'Robotic Assassin', status:'IMPLACABLE KILLBOT', summary:'A Robot that pursues a marked Human or Robot and Downs the target when Colocated.', lead:'Place the Monster in Vault X, add Mark Target to Console Actions, and mark an eligible target.', abilities:['Juggernaut','Armored'], instructions:'After each Resolve it Downs its Colocated marked target or moves one Section toward that target. It can be Downed and Repaired.' },
  { id:'stable-wormhole', name:'Stable Wormhole', status:'A PORTAL TO CERN', summary:'Vault X becomes an escape route: anything inside it or entering it immediately Escapes.', lead:'Damage Reactor if it is not already Damaged.', abilities:[], instructions:'Everything escaping through the Wormhole is considered Colocated for scoring.' },
  { id:'tentacled-monstrosity', name:'Tentacled Monstrosity', status:'ANIMAL-PLANT HYBRID WITH AN APPETITE', summary:'A Monster that consumes Colocated Characters or Items and pulls nearby targets toward itself.', lead:'Place the Monster in Vault X.', abilities:['Juggernaut','Wary'], instructions:'After each Resolve it consumes a Colocated target, pulls an adjacent target, or advances toward the nearest unconsumed Human. Only Fire can Down it.' }
];

const state = {
  game: loadGame(),
  setupPlayers: 4,
  setupCount: SETUP_BY_PLAYERS[4].characters,
  setupMode: 'manual',
  setupSelected: [],
  selectedTrait: 'Agile',
  filters: { characters:'', locations:'', projects:'' }
};

const app = document.querySelector('#app');
const headerActions = document.querySelector('#header-actions');
const bottomNav = document.querySelector('#bottom-nav');
const modalRoot = document.querySelector('#modal-root');
const toast = document.querySelector('#toast');

function loadGame() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!parsed?.characterIds?.length) return null;
    const aliases = { 'astro-chimp':'astrochimp', 'medical-droid':'medical', 'space-pirate':'boarder' };
    const officialIds = new Set(characters.map(character => character.id));
    const originalCount = parsed.characterIds.length;
    const migratedIds = [...new Set(parsed.characterIds.map(id => aliases[id] || id).filter(id => officialIds.has(id)))];
    for (const character of characters) {
      if (migratedIds.length >= originalCount) break;
      if (!migratedIds.includes(character.id)) migratedIds.push(character.id);
    }
    if (migratedIds.join('|') !== parsed.characterIds.join('|')) {
      parsed.characterIds = migratedIds;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    }
    return parsed;
  } catch { return null; }
}

function saveGame(game) {
  state.game = game;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(game));
}

function removeGame() {
  state.game = null;
  localStorage.removeItem(STORAGE_KEY);
}

function getRoster() {
  if (!state.game) return [];
  return state.game.characterIds.map(id => characters.find(character => character.id === id)).filter(Boolean);
}

function escapeHtml(value='') {
  return String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}

function route() {
  const hash = location.hash.replace('#','') || 'home';
  const [view, id] = hash.split('/');
  closeModal();
  renderHeader(view);

  if (['game','characters','locations','projects','traits'].includes(view) && !state.game) {
    location.hash = '#home';
    return;
  }

  const renderers = { home:renderHome, setup:renderSetup, game:renderDashboard, characters:renderCharacters, locations:renderLocations, projects:renderProjects, traits:renderTraits };
  (renderers[view] || renderHome)(id);
  renderBottomNav(view);
  window.scrollTo({ top:0, behavior:'instant' });
  app.focus({ preventScroll:true });
}

function renderHeader(view) {
  if (state.game && view !== 'home' && view !== 'setup') {
    headerActions.innerHTML = `<span class="game-label status-tag">GAME SAVED</span><a class="btn btn-ghost" href="#home">Main menu</a>`;
  } else {
    headerActions.innerHTML = state.game ? `<a class="btn btn-ghost" href="#game">Resume</a>` : '';
  }
}

function renderBottomNav(view) {
  const gameViews = ['game','characters','locations','projects','traits'];
  if (!state.game || !gameViews.includes(view)) {
    bottomNav.hidden = true;
    return;
  }
  bottomNav.hidden = false;
  const items = [
    ['game','⌂','Brief'], ['characters','◎','Crew'], ['locations','⌖','Places'], ['projects','◇','Project X'], ['traits','≋','Abilities']
  ];
  bottomNav.innerHTML = items.map(([routeName, icon, label]) => `<a href="#${routeName}" class="${view===routeName?'active':''}"><span>${icon}</span>${label}</a>`).join('');
}

function renderHome() {
  const activeGame = state.game ? `
    <section class="active-game">
      <div class="active-game-top">
        <div>
          <h3><span class="pulse"></span>Active game detected</h3>
          <p>${state.game.playerCount ? `${state.game.playerCount} players · ` : ''}${state.game.characterIds.length} characters · saved ${relativeTime(state.game.updatedAt)}</p>
        </div>
        <a class="btn btn-primary" href="#game">Continue game <span>→</span></a>
      </div>
    </section>` : '';

  app.innerHTML = `
    <section class="home-menu">
      <h1>Stationfall <em>Companion</em></h1>
      ${activeGame}
      <div class="home-actions">
        <button class="btn btn-primary" data-action="new-game">New game <span>＋</span></button>
        <a class="btn btn-secondary" href="${state.game?'#game':'#setup'}">${state.game?'Open companion':'Character selection'}</a>
      </div>
    </section>`;

  app.querySelector('[data-action="new-game"]').addEventListener('click', startNewGame);
}

function startNewGame() {
  if (state.game) {
    openConfirm('Start a new game?', 'Your current roster will remain saved until you finish the new setup.', () => {
      state.setupSelected = [];
      location.hash = '#setup';
    });
  } else {
    state.setupSelected = [];
    location.hash = '#setup';
  }
}

function renderSetup() {
  const selected = new Set(state.setupSelected);
  const setupRule = SETUP_BY_PLAYERS[state.setupPlayers];
  const picker = state.setupMode === 'manual' ? `
    <div class="character-grid">
      ${characters.map(character => `
        <button class="character-pick ${selected.has(character.id)?'selected':''}" data-character="${character.id}" data-code="${character.code}" aria-pressed="${selected.has(character.id)}">
          <span class="check">${selected.has(character.id)?'✓':''}</span>
          <small>${character.role}</small>
          <h3>${character.name}</h3>
          <div class="mini-traits">${character.traits.slice(0,3).map(trait=>`<span>${trait}</span>`).join('')}</div>
        </button>`).join('')}
    </div>` : `
    <div class="random-stage">
      <div class="random-stage-inner">
        <div class="random-stage-icon">?</div>
        <h2>Let the station decide.</h2>
        <p class="lede">We’ll draw the ${state.setupCount} characters required for ${state.setupPlayers} players. You can reshuffle until the table feels right.</p>
        <button class="btn btn-secondary" data-action="preview-random">Generate preview</button>
      </div>
    </div>`;

  app.innerHTML = `
    <a class="back-link" href="#home">← Main menu</a>
    <div class="setup-shell">
      <aside class="setup-rail">
        <p class="eyebrow">New game</p>
        <h3>Build the cast</h3>
        <p>Your setup saves when you launch the companion.</p>
        <div class="step-list">
          <div class="step active"><b>1</b><span>PLAYER COUNT</span></div>
          <div class="step active"><b>2</b><span>CHARACTERS</span></div>
          <div class="step"><b>3</b><span>LAUNCH</span></div>
        </div>
      </aside>
      <section class="setup-content">
        <div class="page-head">
          <div><p class="eyebrow">Game setup</p><h2>Who’s on the station?</h2><p class="lede">Choose the exact cast, or draw a random roster.</p></div>
        </div>
        <div class="control-row">
          <div class="field">
            <label>Number of players</label>
            <div class="counter">
              <button data-action="decrement" aria-label="Fewer players">−</button>
              <output>${state.setupPlayers}</output>
              <button data-action="increment" aria-label="More players">＋</button>
            </div>
          </div>
          <div class="setup-rule" aria-label="Setup requirements">
            <span><strong>${setupRule.characters}</strong> characters in play</span>
            <span><strong>${setupRule.identities}</strong> identity cards per player</span>
          </div>
          <div class="field">
            <label>Selection method</label>
            <div class="segment">
              <button class="${state.setupMode==='manual'?'active':''}" data-mode="manual">Pick my own</button>
              <button class="${state.setupMode==='random'?'active':''}" data-mode="random">Random draw</button>
            </div>
          </div>
          ${state.setupMode==='manual'?`<div class="selection-count"><strong>${state.setupSelected.length}</strong> / ${state.setupCount} selected</div>`:''}
        </div>
        ${picker}
        <div class="setup-footer">
          <a class="btn btn-secondary" href="#home">Cancel</a>
          <button class="btn btn-primary" data-action="launch" ${state.setupMode==='manual' && state.setupSelected.length!==state.setupCount?'disabled':''}>${state.setupMode==='random'?'Draw & launch':'Launch companion'} <span>→</span></button>
        </div>
      </section>
    </div>`;
  bindSetup();
}

function bindSetup() {
  app.querySelector('[data-action="decrement"]').addEventListener('click', () => {
    state.setupPlayers = Math.max(2, state.setupPlayers - 1);
    state.setupCount = SETUP_BY_PLAYERS[state.setupPlayers].characters;
    state.setupSelected = state.setupSelected.slice(0, state.setupCount);
    renderSetup();
  });
  app.querySelector('[data-action="increment"]').addEventListener('click', () => {
    state.setupPlayers = Math.min(9, state.setupPlayers + 1);
    state.setupCount = SETUP_BY_PLAYERS[state.setupPlayers].characters;
    renderSetup();
  });
  app.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => {
    state.setupMode = button.dataset.mode;
    renderSetup();
  }));
  app.querySelectorAll('[data-character]').forEach(button => button.addEventListener('click', () => {
    const id = button.dataset.character;
    if (state.setupSelected.includes(id)) state.setupSelected = state.setupSelected.filter(item => item !== id);
    else if (state.setupSelected.length < state.setupCount) state.setupSelected.push(id);
    else showToast(`Choose exactly ${state.setupCount} characters`);
    renderSetup();
  }));
  app.querySelector('[data-action="preview-random"]')?.addEventListener('click', () => {
    state.setupSelected = randomCharacterIds(state.setupCount);
    state.setupMode = 'manual';
    renderSetup();
    showToast('Random roster ready — adjust or launch');
  });
  app.querySelector('[data-action="launch"]').addEventListener('click', () => {
    const ids = state.setupMode === 'random' ? randomCharacterIds(state.setupCount) : state.setupSelected;
    if (ids.length !== state.setupCount) return;
    saveGame({ id: crypto.randomUUID?.() || String(Date.now()), playerCount:state.setupPlayers, identityCardsPerPlayer:SETUP_BY_PLAYERS[state.setupPlayers].identities, characterIds:ids, createdAt:Date.now(), updatedAt:Date.now() });
    location.hash = '#game';
    showToast('Game saved on this device');
  });
}

function randomCharacterIds(count) {
  return [...characters].sort(() => Math.random() - .5).slice(0,count).map(character => character.id);
}

function renderDashboard() {
  const roster = getRoster();
  app.innerHTML = `
    <section>
      <div class="dashboard-head">
        <div>
          <p class="eyebrow">Active game</p>
          <h2>Station brief</h2>
          <div class="game-meta"><span class="status-tag">LOCAL SAVE ACTIVE</span>${state.game.playerCount?`<span>${state.game.playerCount} PLAYERS</span><span>${state.game.identityCardsPerPlayer} IDENTITIES EACH</span>`:''}<span>${roster.length} CHARACTERS</span><span>STARTED ${formatDate(state.game.createdAt)}</span></div>
        </div>
        <button class="btn btn-danger" data-action="end-game">End game</button>
      </div>
      <div class="command-search">
        <input id="global-search" type="search" autocomplete="off" placeholder="Search crew, locations, projects or traits…" aria-label="Search companion" />
        <span class="shortcut">⌘ K</span>
        <div class="search-results" id="global-results" hidden></div>
      </div>
      <div class="section-row"><h2>Characters in play</h2><a class="text-link" href="#characters">VIEW ALL →</a></div>
      <div class="roster-strip">${roster.map((character,index)=>rosterCard(character,index)).join('')}</div>
      <div class="tool-grid">
        ${toolCard('characters','◎','Character companion','Abilities, objectives, and starting locations')}
        ${toolCard('locations','⌖','Location finder','Search the station by deck, zone, or purpose')}
        ${toolCard('projects','◇','Project X lookup','Find project leads, clues, and classifications')}
        ${toolCard('traits','≋','Ability finder','See which in-play characters share an official ability')}
      </div>
    </section>`;

  bindCharacterOpeners();
  app.querySelector('[data-action="end-game"]').addEventListener('click', () => openConfirm('End this game?', 'This removes the saved roster from this device.', () => { removeGame(); location.hash='#home'; showToast('Game cleared'); }));
  const globalSearch = app.querySelector('#global-search');
  globalSearch.addEventListener('input', () => renderGlobalResults(globalSearch.value));
  document.addEventListener('keydown', focusSearchShortcut, { once:true });
}

function rosterCard(character,index) {
  return `<button class="roster-card" data-open-character="${character.id}" style="--accent:${character.accent}"><span class="index">${String(index+1).padStart(2,'0')}</span><span class="avatar">${character.code}</span><h3>${character.name}</h3><p>${character.role}</p><span class="arrow">↗</span></button>`;
}

function toolCard(routeName, icon, title, text) {
  return `<a class="tool-card" href="#${routeName}"><span class="tool-icon">${icon}</span><div><h3>${title}</h3><p>${text}</p></div></a>`;
}

function renderGlobalResults(query) {
  const resultsNode = app.querySelector('#global-results');
  const term = query.trim().toLowerCase();
  if (!term) { resultsNode.hidden = true; return; }
  const rosterIds = new Set(state.game.characterIds);
  const found = [
    ...characters.filter(item => rosterIds.has(item.id) && searchable(item).includes(term)).map(item => ({type:'Character', label:item.name, detail:item.role, action:`character:${item.id}`})),
    ...locations.filter(item => searchable(item).includes(term)).map(item => ({type:'Location', label:item.name, detail:`${item.deck} · ${item.zone}`, action:`location:${item.id}`})),
    ...projects.filter(item => searchable(item).includes(term)).map(item => ({type:'Project', label:item.name, detail:item.status, action:`project:${item.id}`})),
    ...allTraits().filter(trait => trait.toLowerCase().includes(term)).map(trait => ({type:'Ability', label:trait, detail:'Find matching roster', action:`trait:${trait}`}))
  ].slice(0,8);
  resultsNode.hidden = false;
  resultsNode.innerHTML = found.length ? found.map(result => `<button class="search-result" data-global-action="${result.action}"><span class="result-type">${result.type}</span><span><b>${result.label}</b><br><small>${result.detail}</small></span></button>`).join('') : `<div class="search-empty">No signal found for “${escapeHtml(query)}”</div>`;
  resultsNode.querySelectorAll('[data-global-action]').forEach(button => button.addEventListener('click', () => handleGlobalAction(button.dataset.globalAction)));
}

function handleGlobalAction(action) {
  const [type,id] = action.split(':');
  if (type==='character') openCharacter(id);
  if (type==='location') { location.hash='#locations'; setTimeout(()=>openLocation(id),0); }
  if (type==='project') { location.hash='#projects'; setTimeout(()=>openProject(id),0); }
  if (type==='trait') { state.selectedTrait=id; location.hash='#traits'; }
}

function searchable(item) {
  return Object.values(item).flat().join(' ').toLowerCase();
}

function renderCharacters() {
  const roster = getRoster();
  const query = state.filters.characters;
  const filtered = roster.filter(character => searchable(character).includes(query.toLowerCase()));
  renderLookupPage('Character companion','Only the cast selected for this game appears here.','Search in-play characters…','characters', filtered.map(character => `
    <article class="info-card clickable" data-open-character="${character.id}">
      <div class="kicker">${character.role}</div><h3>${character.name}</h3><p>${character.traits.length} ${character.traits.length===1?'ability':'abilities'}: ${character.traits.join(' · ')}</p>
      <div class="meta"><span class="tag in-play">IN PLAY</span>${character.traits.map(trait=>`<span class="tag">${trait}</span>`).join('')}</div>
    </article>`).join(''));
  bindLookupSearch('characters'); bindCharacterOpeners();
}

function renderLocations() {
  const query = state.filters.locations;
  const filtered = locations.filter(location => searchable(location).includes(query.toLowerCase()));
  const zones = ['All',...new Set(locations.map(location=>location.zone))];
  renderLookupPage('Location finder','Search the station by name, deck, zone, or function.','Try “escape”, “medical”, or “Deck D”…','locations', filtered.map(location => `
    <article class="info-card location-card clickable" data-open-location="${location.id}"><span class="deck-label">${location.deck}</span><div class="kicker">${location.zone} zone</div><h3>${location.name}</h3><p>${location.description}</p><div class="meta">${location.tags.map(tag=>`<span class="tag">${tag}</span>`).join('')}</div></article>`).join(''), zones);
  bindLookupSearch('locations'); bindFilterChips('locations'); app.querySelectorAll('[data-open-location]').forEach(node=>node.addEventListener('click',()=>openLocation(node.dataset.openLocation)));
}

function renderProjects() {
  const query = state.filters.projects;
  const filtered = projects.filter(project => searchable(project).includes(query.toLowerCase()));
  renderLookupPage('Project X index','The eight experiments from the official Character Dossier.','Search projects, abilities, or instructions…','projects', filtered.map(project => `
    <article class="info-card clickable" data-open-project="${project.id}"><div class="kicker">PROJECT X // ${project.status}</div><h3>${project.name}</h3><p>${project.summary}</p><div class="meta">${project.abilities.map(ability=>`<span class="tag">${ability}</span>`).join('')}<span class="tag in-play">VIEW RULES</span></div></article>`).join(''));
  bindLookupSearch('projects'); app.querySelectorAll('[data-open-project]').forEach(node=>node.addEventListener('click',()=>openProject(node.dataset.openProject)));
}

function renderLookupPage(title, subtitle, placeholder, key, cards, chips=[]) {
  app.innerHTML = `
    <a class="back-link" href="#game">← Station brief</a>
    <div class="page-head"><div><p class="eyebrow">Field index</p><h2>${title}</h2><p class="lede">${subtitle}</p></div></div>
    <div class="lookup-bar"><input class="search-input" data-lookup="${key}" type="search" value="${escapeHtml(state.filters[key])}" placeholder="${placeholder}" aria-label="Search ${title}" /><a class="btn btn-secondary" href="#game">Done</a></div>
    ${chips.length?`<div class="filter-chips">${chips.map((chip,index)=>`<button class="chip ${index===0?'active':''}" data-chip="${chip}" data-key="${key}">${chip}</button>`).join('')}</div>`:''}
    <div class="list-grid">${cards || `<div class="empty-state"><div><h3>No matches</h3><p>Try a broader search term.</p></div></div>`}</div>`;
}

function bindLookupSearch(key) {
  const input = app.querySelector(`[data-lookup="${key}"]`);
  input.addEventListener('input', () => { state.filters[key] = input.value; if(key==='characters') renderCharacters(); if(key==='locations') renderLocations(); if(key==='projects') renderProjects(); requestAnimationFrame(()=>app.querySelector(`[data-lookup="${key}"]`)?.focus()); });
}

function bindFilterChips(key) {
  app.querySelectorAll(`[data-key="${key}"]`).forEach(button => button.addEventListener('click', () => {
    state.filters[key] = button.dataset.chip === 'All' ? '' : button.dataset.chip;
    renderLocations();
  }));
}

function renderTraits() {
  const traits = allTraits();
  if (!traits.includes(state.selectedTrait)) state.selectedTrait = traits[0];
  const matches = getRoster().filter(character=>character.traits.includes(state.selectedTrait));
  app.innerHTML = `
    <a class="back-link" href="#game">← Station brief</a>
    <div class="page-head"><div><p class="eyebrow">Roster query</p><h2>Who has ability…</h2><p class="lede">Search the official dossier abilities among characters currently in play.</p></div></div>
    <div class="filter-chips">${traits.map(trait=>`<button class="chip ${trait===state.selectedTrait?'active':''}" data-trait="${trait}">${trait}</button>`).join('')}</div>
    <section class="trait-section">
      <div class="section-row"><h2>${state.selectedTrait}</h2><span class="tag in-play">${matches.length} MATCH${matches.length===1?'':'ES'}</span></div>
      <div class="trait-results">${matches.length?matches.map(character=>`<button class="trait-person" data-open-character="${character.id}"><span class="mini-avatar" style="--accent:${character.accent}">${character.code}</span><span><b>${character.name}</b><small>${character.role}</small></span></button>`).join(''):`<div class="empty-state"><div><h3>No one in play</h3><p>Try another trait.</p></div></div>`}</div>
    </section>`;
  app.querySelectorAll('[data-trait]').forEach(button=>button.addEventListener('click',()=>{state.selectedTrait=button.dataset.trait;renderTraits();}));
  bindCharacterOpeners();
}

function allTraits() {
  return [...new Set(getRoster().flatMap(character=>character.traits))].sort();
}

function bindCharacterOpeners() {
  app.querySelectorAll('[data-open-character]').forEach(node=>node.addEventListener('click',()=>openCharacter(node.dataset.openCharacter)));
}

function openCharacter(id) {
  const character = characters.find(item=>item.id===id); if(!character) return;
  openModal(`
    <div class="modal-head" data-code="${character.code}">
      <button class="icon-btn modal-close" data-close-modal aria-label="Close">×</button>
      <div class="modal-title"><span class="detail-avatar" style="--accent:${character.accent}">${character.code}</span><div><h2>${character.name}</h2><p>${character.role}</p></div></div>
    </div>
    <div class="modal-body">
      <div class="meta">${character.traits.map(trait=>`<span class="tag">${trait}</span>`).join('')}<span class="tag in-play">START: ${character.start}</span>${character.influence?`<span class="tag">INFLUENCE ${character.influence}</span>`:''}</div>
      <div class="intel-block"><h3>Setup</h3><p>${character.setup}</p></div>
      <div class="intel-block"><h3>Abilities</h3>${renderAbilities(character.abilityDetails)}</div>
      <div class="intel-block"><h3>Reveal power</h3><p>${character.reveal}</p></div>
      <div class="intel-block">${renderAgenda(character.agenda, character.objective)}</div>
      <div class="intel-block"><h3>Bonus points</h3><p>${character.bonus}</p></div>
      <div class="intel-block"><h3>Quirks</h3><p>${character.quirks}</p></div>
      <div class="modal-actions"><button class="btn btn-secondary" data-close-modal>Close file</button><a class="btn btn-primary" href="#traits" data-close-modal>Find shared abilities</a></div>
    </div>`);
}

function renderAgenda(agenda, fallback) {
  if (!agenda) return `<h3>Agenda</h3><p>${fallback}</p>`;
  const items = agenda.items.map(item => `
    <li class="${item.note?'agenda-note':''}">
      <span>${item.text}</span>
      ${item.children?.length ? `<ul>${item.children.map(child => `<li>${child}</li>`).join('')}</ul>` : ''}
    </li>`).join('');
  return `<section class="agenda-card"><h3>Agenda: <em>${agenda.title}</em></h3><ul class="agenda-list">${items}</ul></section>`;
}

function renderAbilities(abilities) {
  return `<div class="ability-list">${abilities.map(ability => `
    <article class="ability-card">
      <h4>${ability.name}</h4>
      <p>${ability.description}</p>
    </article>`).join('')}</div>`;
}

function openLocation(id) {
  const location = locations.find(item=>item.id===id); if(!location) return;
  openModal(`<div class="modal-head" data-code="${location.deck.replace('-','')}"><button class="icon-btn modal-close" data-close-modal aria-label="Close">×</button><div class="modal-title"><div><h2>${location.name}</h2><p>${location.deck} // ${location.zone} zone</p></div></div></div><div class="modal-body"><div class="meta">${location.tags.map(tag=>`<span class="tag">${tag}</span>`).join('')}</div><div class="intel-block"><h3>Location brief</h3><p>${location.description}</p></div><div class="intel-block"><h3>Finder note</h3><p>Located in the ${location.zone.toLowerCase()} section. Use the deck code ${location.deck} as the physical-board reference.</p></div><div class="modal-actions"><button class="btn btn-secondary" data-close-modal>Close location</button></div></div>`);
}

function openProject(id) {
  const project = projects.find(item=>item.id===id); if(!project) return;
  openModal(`<div class="modal-head" data-code="${project.id.slice(0,2).toUpperCase()}"><button class="icon-btn modal-close" data-close-modal aria-label="Close">×</button><div class="modal-title"><div><h2>${project.name}</h2><p>${project.status}</p></div></div></div><div class="modal-body"><div class="intel-block"><h3>Overview</h3><p>${project.summary}</p></div><div class="intel-block"><h3>Setup</h3><p>${project.lead}</p></div>${project.abilities.length?`<div class="intel-block"><h3>Abilities</h3><div class="meta">${project.abilities.map(ability=>`<span class="tag in-play">${ability}</span>`).join('')}</div></div>`:''}<div class="intel-block"><h3>Instructions</h3><p>${project.instructions}</p></div><div class="modal-actions"><button class="btn btn-secondary" data-close-modal>Close record</button></div></div>`);
}

function openConfirm(title, body, onConfirm) {
  openModal(`<div class="modal-body"><p class="eyebrow">Confirm action</p><h2>${title}</h2><p class="lede">${body}</p><div class="modal-actions"><button class="btn btn-secondary" data-close-modal>Cancel</button><button class="btn btn-danger" data-confirm>Continue</button></div></div>`);
  modalRoot.querySelector('[data-confirm]').addEventListener('click',()=>{closeModal();onConfirm();});
}

function openModal(content) {
  modalRoot.innerHTML = `<div class="modal-backdrop" data-backdrop><section class="modal" role="dialog" aria-modal="true">${content}</section></div>`;
  modalRoot.querySelectorAll('[data-close-modal]').forEach(button=>button.addEventListener('click',closeModal));
  modalRoot.querySelector('[data-backdrop]').addEventListener('click',event=>{if(event.target===event.currentTarget)closeModal();});
  document.addEventListener('keydown', closeOnEscape);
}

function closeOnEscape(event) { if(event.key==='Escape') closeModal(); }
function closeModal() { modalRoot.innerHTML=''; document.removeEventListener('keydown',closeOnEscape); }

function showToast(message) {
  toast.textContent = message; toast.classList.add('show');
  clearTimeout(showToast.timer); showToast.timer = setTimeout(()=>toast.classList.remove('show'),2600);
}

function relativeTime(timestamp) {
  const minutes = Math.max(0, Math.floor((Date.now()-timestamp)/60000));
  if(minutes<1) return 'just now'; if(minutes<60) return `${minutes}m ago`;
  const hours=Math.floor(minutes/60); if(hours<24) return `${hours}h ago`;
  return `${Math.floor(hours/24)}d ago`;
}
function formatDate(timestamp) { return new Intl.DateTimeFormat(undefined,{month:'short',day:'numeric'}).format(timestamp).toUpperCase(); }
function focusSearchShortcut(event) { if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();app.querySelector('#global-search')?.focus();document.addEventListener('keydown',focusSearchShortcut,{once:true});} }

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./sw.js').catch(()=>{});
