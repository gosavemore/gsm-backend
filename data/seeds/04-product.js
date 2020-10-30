exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex("product")
  //   .del()
  //   .then(function () {
  // Inserts seed entries
  return knex("product").insert([
    {
      category_id: 4,
      productName: "Flour - Strong",
      image:
        "http://salon.com/nulla.png?nulla=in&dapibus=quis&dolor=justo&vel=maecenas&est=rhoncus&donec=aliquam&odio=lacus&justo=morbi&sollicitudin=quis&ut=tortor&suscipit=id&a=nulla&feugiat=ultrices&et=aliquet&eros=maecenas&vestibulum=leo&ac=odio&est=condimentum&lacinia=id&nisi=luctus&venenatis=nec&tristique=molestie&fusce=sed&congue=justo&diam=pellentesque&id=viverra&ornare=pede&imperdiet=ac&sapien=diam&urna=cras&pretium=pellentesque&nisl=volutpat&ut=dui&volutpat=maecenas&sapien=tristique&arcu=est&sed=et&augue=tempus&aliquam=semper&erat=est&volutpat=quam&in=pharetra&congue=magna&etiam=ac&justo=consequat&etiam=metus&pretium=sapien&iaculis=ut&justo=nunc&in=vestibulum&hac=ante&habitasse=ipsum&platea=primis&dictumst=in&etiam=faucibus&faucibus=orci&cursus=luctus&urna=et&ut=ultrices&tellus=posuere&nulla=cubilia&ut=curae&erat=mauris&id=viverra&mauris=diam&vulputate=vitae&elementum=quam&nullam=suspendisse&varius=potenti&nulla=nullam&facilisi=porttitor&cras=lacus&non=at&velit=turpis&nec=donec&nisi=posuere&vulputate=metus&nonummy=vitae&maecenas=ipsum&tincidunt=aliquam&lacus=non&at=mauris&velit=morbi&vivamus=non&vel=lectus&nulla=aliquam&eget=sit&eros=amet&elementum=diam&pellentesque=in&quisque=magna",
      price: 676,
      shortDescription:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      description:
        "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      ratings: 5,
      stock: 90,
      brand: "Yogurt - Assorted Pack",
    },
    {
      category_id: 4,
      productName: "Vacuum Bags 12x16",
      image:
        "http://noaa.gov/nonummy/integer/non.js?amet=sed&consectetuer=interdum&adipiscing=venenatis&elit=turpis&proin=enim&risus=blandit&praesent=mi&lectus=in&vestibulum=porttitor&quam=pede&sapien=justo&varius=eu&ut=massa&blandit=donec&non=dapibus&interdum=duis&in=at&ante=velit&vestibulum=eu&ante=est&ipsum=congue&primis=elementum&in=in&faucibus=hac&orci=habitasse&luctus=platea&et=dictumst&ultrices=morbi&posuere=vestibulum&cubilia=velit&curae=id&duis=pretium&faucibus=iaculis&accumsan=diam&odio=erat&curabitur=fermentum&convallis=justo&duis=nec&consequat=condimentum&dui=neque&nec=sapien&nisi=placerat&volutpat=ante&eleifend=nulla&donec=justo&ut=aliquam&dolor=quis&morbi=turpis&vel=eget&lectus=elit&in=sodales&quam=scelerisque&fringilla=mauris&rhoncus=sit&mauris=amet&enim=eros&leo=suspendisse&rhoncus=accumsan&sed=tortor&vestibulum=quis&sit=turpis&amet=sed&cursus=ante&id=vivamus&turpis=tortor",
      price: 279,
      shortDescription:
        "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      description:
        "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      ratings: 5,
      stock: 21,
      brand: "Pepper - White, Whole",
    },
    {
      category_id: 6,
      productName: "Cheese - Manchego, Spanish",
      image:
        "http://unicef.org/ultrices/phasellus/id.json?duis=justo&at=etiam&velit=pretium&eu=iaculis&est=justo&congue=in&elementum=hac&in=habitasse&hac=platea&habitasse=dictumst&platea=etiam&dictumst=faucibus&morbi=cursus&vestibulum=urna&velit=ut&id=tellus&pretium=nulla&iaculis=ut&diam=erat&erat=id&fermentum=mauris&justo=vulputate&nec=elementum&condimentum=nullam&neque=varius&sapien=nulla&placerat=facilisi&ante=cras&nulla=non&justo=velit&aliquam=nec&quis=nisi&turpis=vulputate&eget=nonummy&elit=maecenas&sodales=tincidunt&scelerisque=lacus&mauris=at&sit=velit&amet=vivamus&eros=vel&suspendisse=nulla&accumsan=eget&tortor=eros&quis=elementum&turpis=pellentesque&sed=quisque&ante=porta&vivamus=volutpat&tortor=erat&duis=quisque&mattis=erat&egestas=eros&metus=viverra&aenean=eget&fermentum=congue&donec=eget&ut=semper&mauris=rutrum&eget=nulla&massa=nunc&tempor=purus&convallis=phasellus&nulla=in&neque=felis&libero=donec&convallis=semper&eget=sapien&eleifend=a&luctus=libero&ultricies=nam&eu=dui&nibh=proin&quisque=leo&id=odio&justo=porttitor&sit=id&amet=consequat&sapien=in&dignissim=consequat&vestibulum=ut&vestibulum=nulla&ante=sed&ipsum=accumsan&primis=felis&in=ut&faucibus=at&orci=dolor&luctus=quis&et=odio&ultrices=consequat&posuere=varius&cubilia=integer",
      price: 39,
      shortDescription:
        "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      description:
        "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      ratings: 2,
      stock: 3,
      brand: "Veal - Insides, Grains",
    },
    {
      category_id: 6,
      productName: "Nacho Chips",
      image:
        "https://who.int/tristique/tortor/eu/pede.jsp?cras=nisi&mi=vulputate&pede=nonummy&malesuada=maecenas&in=tincidunt&imperdiet=lacus&et=at&commodo=velit&vulputate=vivamus&justo=vel&in=nulla&blandit=eget&ultrices=eros&enim=elementum&lorem=pellentesque&ipsum=quisque&dolor=porta&sit=volutpat&amet=erat&consectetuer=quisque&adipiscing=erat&elit=eros&proin=viverra&interdum=eget",
      price: 67,
      shortDescription:
        "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      description:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      ratings: 1,
      stock: 75,
      brand: "Mushroom - Chantrelle, Fresh",
    },
    {
      category_id: 5,
      productName: "Lobster - Live",
      image:
        "http://wikia.com/posuere/cubilia/curae/donec.js?in=donec&faucibus=diam",
      price: 699,
      shortDescription:
        "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      description:
        "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      ratings: 4,
      stock: 81,
      brand: "Beef - Bones, Marrow",
    },
    {
      category_id: 3,
      productName: "Carbonated Water - Raspberry",
      image:
        "http://typepad.com/neque/sapien/placerat/ante/nulla/justo.json?interdum=ut&mauris=nunc&non=vestibulum&ligula=ante&pellentesque=ipsum&ultrices=primis&phasellus=in&id=faucibus&sapien=orci&in=luctus&sapien=et&iaculis=ultrices&congue=posuere&vivamus=cubilia&metus=curae&arcu=mauris&adipiscing=viverra&molestie=diam&hendrerit=vitae&at=quam&vulputate=suspendisse&vitae=potenti&nisl=nullam&aenean=porttitor&lectus=lacus&pellentesque=at&eget=turpis&nunc=donec&donec=posuere&quis=metus&orci=vitae",
      price: 668,
      shortDescription:
        "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      description:
        "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
      ratings: 1,
      stock: 88,
      brand: "Yoplait - Strawbrasp Peac",
    },
    {
      category_id: 1,
      productName: "Chivas Regal - 12 Year Old",
      image:
        "http://zimbio.com/pede/morbi/porttitor/lorem.png?natoque=tortor&penatibus=sollicitudin&et=mi&magnis=sit&dis=amet&parturient=lobortis&montes=sapien&nascetur=sapien&ridiculus=non&mus=mi&vivamus=integer&vestibulum=ac&sagittis=neque&sapien=duis&cum=bibendum&sociis=morbi&natoque=non&penatibus=quam&et=nec&magnis=dui&dis=luctus&parturient=rutrum&montes=nulla&nascetur=tellus&ridiculus=in&mus=sagittis&etiam=dui&vel=vel&augue=nisl&vestibulum=duis&rutrum=ac&rutrum=nibh&neque=fusce&aenean=lacus&auctor=purus&gravida=aliquet&sem=at&praesent=feugiat&id=non&massa=pretium&id=quis&nisl=lectus&venenatis=suspendisse&lacinia=potenti&aenean=in&sit=eleifend&amet=quam&justo=a&morbi=odio&ut=in&odio=hac&cras=habitasse&mi=platea&pede=dictumst&malesuada=maecenas&in=ut&imperdiet=massa&et=quis&commodo=augue&vulputate=luctus&justo=tincidunt&in=nulla&blandit=mollis&ultrices=molestie&enim=lorem&lorem=quisque&ipsum=ut&dolor=erat&sit=curabitur&amet=gravida&consectetuer=nisi&adipiscing=at&elit=nibh&proin=in&interdum=hac&mauris=habitasse&non=platea&ligula=dictumst&pellentesque=aliquam&ultrices=augue&phasellus=quam&id=sollicitudin",
      price: 794,
      shortDescription:
        "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      description:
        "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      ratings: 3,
      stock: 44,
      brand: "Apple - Delicious, Golden",
    },
    {
      category_id: 5,
      productName: "Bread - Roll, Soft White Round",
      image:
        "http://yahoo.com/nam/ultrices.jsp?vivamus=pede&tortor=morbi&duis=porttitor&mattis=lorem&egestas=id&metus=ligula&aenean=suspendisse&fermentum=ornare&donec=consequat&ut=lectus&mauris=in&eget=est&massa=risus&tempor=auctor&convallis=sed&nulla=tristique&neque=in&libero=tempus&convallis=sit&eget=amet&eleifend=sem&luctus=fusce&ultricies=consequat&eu=nulla&nibh=nisl&quisque=nunc&id=nisl&justo=duis&sit=bibendum&amet=felis&sapien=sed&dignissim=interdum&vestibulum=venenatis&vestibulum=turpis&ante=enim&ipsum=blandit&primis=mi&in=in&faucibus=porttitor&orci=pede&luctus=justo&et=eu&ultrices=massa&posuere=donec&cubilia=dapibus&curae=duis&nulla=at&dapibus=velit&dolor=eu&vel=est&est=congue&donec=elementum&odio=in&justo=hac&sollicitudin=habitasse&ut=platea&suscipit=dictumst&a=morbi&feugiat=vestibulum&et=velit&eros=id&vestibulum=pretium&ac=iaculis&est=diam&lacinia=erat&nisi=fermentum&venenatis=justo&tristique=nec&fusce=condimentum&congue=neque&diam=sapien&id=placerat&ornare=ante&imperdiet=nulla&sapien=justo&urna=aliquam&pretium=quis&nisl=turpis&ut=eget&volutpat=elit&sapien=sodales&arcu=scelerisque&sed=mauris&augue=sit&aliquam=amet&erat=eros",
      price: 26,
      shortDescription:
        "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      description:
        "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      ratings: 1,
      stock: 46,
      brand: "Broom Handle",
    },
    {
      category_id: 2,
      productName: "Sole - Dover, Whole, Fresh",
      image:
        "http://unc.edu/nunc/donec/quis/orci/eget.json?eros=vestibulum&viverra=sit&eget=amet&congue=cursus&eget=id",
      price: 963,
      shortDescription:
        "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      description:
        "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      ratings: 4,
      stock: 57,
      brand: "Bread Cranberry Foccacia",
    },
    {
      category_id: 5,
      productName: "Cheese - Cream Cheese",
      image:
        "https://utexas.edu/pulvinar/sed/nisl/nunc/rhoncus/dui/vel.jpg?enim=dui&lorem=vel&ipsum=sem&dolor=sed&sit=sagittis&amet=nam&consectetuer=congue&adipiscing=risus&elit=semper&proin=porta&interdum=volutpat&mauris=quam&non=pede&ligula=lobortis&pellentesque=ligula&ultrices=sit&phasellus=amet&id=eleifend&sapien=pede&in=libero&sapien=quis&iaculis=orci&congue=nullam&vivamus=molestie&metus=nibh&arcu=in&adipiscing=lectus&molestie=pellentesque&hendrerit=at&at=nulla&vulputate=suspendisse&vitae=potenti&nisl=cras&aenean=in&lectus=purus&pellentesque=eu&eget=magna&nunc=vulputate&donec=luctus&quis=cum&orci=sociis&eget=natoque&orci=penatibus&vehicula=et&condimentum=magnis&curabitur=dis&in=parturient&libero=montes&ut=nascetur&massa=ridiculus&volutpat=mus&convallis=vivamus&morbi=vestibulum&odio=sagittis&odio=sapien&elementum=cum&eu=sociis&interdum=natoque&eu=penatibus&tincidunt=et&in=magnis&leo=dis&maecenas=parturient&pulvinar=montes&lobortis=nascetur&est=ridiculus&phasellus=mus&sit=etiam&amet=vel&erat=augue&nulla=vestibulum&tempus=rutrum&vivamus=rutrum&in=neque&felis=aenean&eu=auctor&sapien=gravida",
      price: 899,
      shortDescription:
        "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      description:
        "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      ratings: 2,
      stock: 61,
      brand: "Noodles - Steamed Chow Mein",
    },
    {
      category_id: 1,
      productName: "Beef - Tongue, Cooked",
      image:
        "https://marketwatch.com/quisque/id/justo/sit/amet/sapien.png?in=vitae&faucibus=consectetuer&orci=eget&luctus=rutrum&et=at&ultrices=lorem&posuere=integer&cubilia=tincidunt&curae=ante&nulla=vel&dapibus=ipsum&dolor=praesent&vel=blandit&est=lacinia&donec=erat&odio=vestibulum&justo=sed&sollicitudin=magna&ut=at&suscipit=nunc&a=commodo&feugiat=placerat&et=praesent&eros=blandit&vestibulum=nam&ac=nulla&est=integer&lacinia=pede&nisi=justo&venenatis=lacinia&tristique=eget&fusce=tincidunt&congue=eget&diam=tempus&id=vel&ornare=pede&imperdiet=morbi&sapien=porttitor&urna=lorem&pretium=id&nisl=ligula&ut=suspendisse&volutpat=ornare&sapien=consequat&arcu=lectus&sed=in&augue=est&aliquam=risus&erat=auctor&volutpat=sed&in=tristique&congue=in&etiam=tempus&justo=sit&etiam=amet&pretium=sem&iaculis=fusce&justo=consequat&in=nulla&hac=nisl&habitasse=nunc&platea=nisl&dictumst=duis",
      price: 142,
      shortDescription:
        "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      description:
        "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      ratings: 3,
      stock: 64,
      brand: "Sun - Dried Tomatoes",
    },
    {
      category_id: 4,
      productName: "Soup Campbells - Tomato Bisque",
      image:
        "http://live.com/aliquam/lacus/morbi/quis/tortor/id.xml?morbi=quam&non=suspendisse&lectus=potenti&aliquam=nullam&sit=porttitor&amet=lacus&diam=at&in=turpis&magna=donec&bibendum=posuere&imperdiet=metus&nullam=vitae&orci=ipsum&pede=aliquam&venenatis=non&non=mauris&sodales=morbi&sed=non&tincidunt=lectus&eu=aliquam&felis=sit&fusce=amet&posuere=diam&felis=in&sed=magna&lacus=bibendum&morbi=imperdiet",
      price: 569,
      shortDescription:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      description:
        "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      ratings: 4,
      stock: 43,
      brand: "Cookie Dough - Oatmeal Rasin",
    },
    {
      category_id: 2,
      productName: "Fish - Bones",
      image:
        "http://usda.gov/duis/at/velit/eu/est/congue.png?diam=id&id=consequat&ornare=in&imperdiet=consequat&sapien=ut&urna=nulla&pretium=sed&nisl=accumsan&ut=felis&volutpat=ut&sapien=at&arcu=dolor&sed=quis&augue=odio&aliquam=consequat&erat=varius&volutpat=integer&in=ac&congue=leo&etiam=pellentesque&justo=ultrices&etiam=mattis&pretium=odio&iaculis=donec&justo=vitae&in=nisi&hac=nam&habitasse=ultrices&platea=libero&dictumst=non&etiam=mattis&faucibus=pulvinar&cursus=nulla&urna=pede&ut=ullamcorper&tellus=augue&nulla=a&ut=suscipit&erat=nulla&id=elit&mauris=ac&vulputate=nulla&elementum=sed&nullam=vel&varius=enim&nulla=sit&facilisi=amet&cras=nunc&non=viverra&velit=dapibus&nec=nulla&nisi=suscipit&vulputate=ligula&nonummy=in&maecenas=lacus&tincidunt=curabitur&lacus=at&at=ipsum&velit=ac&vivamus=tellus&vel=semper&nulla=interdum&eget=mauris&eros=ullamcorper",
      price: 300,
      shortDescription:
        "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      description:
        "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      ratings: 5,
      stock: 49,
      brand: "Pepper - Chipotle, Canned",
    },
    {
      category_id: 2,
      productName: "Cup - 3.5oz, Foam",
      image:
        "http://reverbnation.com/suspendisse.jpg?ultrices=fermentum&posuere=justo&cubilia=nec&curae=condimentum&donec=neque&pharetra=sapien&magna=placerat&vestibulum=ante&aliquet=nulla&ultrices=justo&erat=aliquam&tortor=quis&sollicitudin=turpis&mi=eget&sit=elit&amet=sodales&lobortis=scelerisque&sapien=mauris&sapien=sit&non=amet&mi=eros&integer=suspendisse&ac=accumsan&neque=tortor&duis=quis&bibendum=turpis&morbi=sed&non=ante&quam=vivamus&nec=tortor&dui=duis&luctus=mattis&rutrum=egestas&nulla=metus&tellus=aenean&in=fermentum&sagittis=donec&dui=ut&vel=mauris&nisl=eget&duis=massa&ac=tempor&nibh=convallis&fusce=nulla&lacus=neque&purus=libero&aliquet=convallis&at=eget&feugiat=eleifend&non=luctus&pretium=ultricies&quis=eu&lectus=nibh&suspendisse=quisque&potenti=id&in=justo&eleifend=sit&quam=amet&a=sapien&odio=dignissim&in=vestibulum&hac=vestibulum&habitasse=ante&platea=ipsum&dictumst=primis&maecenas=in&ut=faucibus&massa=orci&quis=luctus&augue=et&luctus=ultrices&tincidunt=posuere&nulla=cubilia&mollis=curae&molestie=nulla&lorem=dapibus&quisque=dolor&ut=vel",
      price: 557,
      shortDescription:
        "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      description:
        "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      ratings: 5,
      stock: 24,
      brand: "Worcestershire Sauce",
    },
    {
      category_id: 2,
      productName: "Ham - Procutinni",
      image:
        "http://photobucket.com/iaculis.jpg?platea=nisl&dictumst=duis&aliquam=ac&augue=nibh&quam=fusce&sollicitudin=lacus&vitae=purus&consectetuer=aliquet&eget=at&rutrum=feugiat&at=non&lorem=pretium&integer=quis&tincidunt=lectus&ante=suspendisse&vel=potenti&ipsum=in&praesent=eleifend&blandit=quam&lacinia=a&erat=odio&vestibulum=in&sed=hac&magna=habitasse&at=platea&nunc=dictumst&commodo=maecenas&placerat=ut&praesent=massa&blandit=quis&nam=augue&nulla=luctus&integer=tincidunt&pede=nulla&justo=mollis&lacinia=molestie&eget=lorem&tincidunt=quisque&eget=ut&tempus=erat&vel=curabitur&pede=gravida&morbi=nisi&porttitor=at&lorem=nibh&id=in&ligula=hac&suspendisse=habitasse&ornare=platea&consequat=dictumst&lectus=aliquam&in=augue&est=quam&risus=sollicitudin&auctor=vitae&sed=consectetuer&tristique=eget&in=rutrum&tempus=at&sit=lorem&amet=integer&sem=tincidunt&fusce=ante&consequat=vel&nulla=ipsum&nisl=praesent&nunc=blandit&nisl=lacinia&duis=erat&bibendum=vestibulum&felis=sed&sed=magna&interdum=at&venenatis=nunc&turpis=commodo&enim=placerat&blandit=praesent&mi=blandit&in=nam&porttitor=nulla&pede=integer&justo=pede&eu=justo&massa=lacinia&donec=eget&dapibus=tincidunt&duis=eget&at=tempus&velit=vel&eu=pede&est=morbi&congue=porttitor&elementum=lorem&in=id&hac=ligula&habitasse=suspendisse&platea=ornare",
      price: 487,
      shortDescription:
        "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      description:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      ratings: 2,
      stock: 46,
      brand: "Scallops - U - 10",
    },
    {
      category_id: 4,
      productName: "Sausage - Chorizo",
      image:
        "http://themeforest.net/justo/in/hac.js?lectus=ut&pellentesque=blandit&at=non&nulla=interdum&suspendisse=in&potenti=ante&cras=vestibulum&in=ante&purus=ipsum&eu=primis&magna=in&vulputate=faucibus&luctus=orci&cum=luctus&sociis=et&natoque=ultrices&penatibus=posuere&et=cubilia&magnis=curae&dis=duis&parturient=faucibus&montes=accumsan&nascetur=odio&ridiculus=curabitur&mus=convallis&vivamus=duis&vestibulum=consequat&sagittis=dui&sapien=nec&cum=nisi&sociis=volutpat&natoque=eleifend&penatibus=donec&et=ut&magnis=dolor&dis=morbi&parturient=vel&montes=lectus&nascetur=in&ridiculus=quam&mus=fringilla&etiam=rhoncus&vel=mauris&augue=enim&vestibulum=leo&rutrum=rhoncus&rutrum=sed&neque=vestibulum&aenean=sit&auctor=amet&gravida=cursus&sem=id&praesent=turpis&id=integer&massa=aliquet&id=massa&nisl=id&venenatis=lobortis&lacinia=convallis&aenean=tortor&sit=risus&amet=dapibus&justo=augue",
      price: 454,
      shortDescription:
        "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      description:
        "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      ratings: 5,
      stock: 5,
      brand: "Vodka - Moskovskaya",
    },
    {
      category_id: 5,
      productName: "Phyllo Dough",
      image:
        "https://telegraph.co.uk/dolor/morbi/vel/lectus.aspx?sagittis=enim&dui=leo&vel=rhoncus&nisl=sed&duis=vestibulum&ac=sit&nibh=amet&fusce=cursus&lacus=id&purus=turpis&aliquet=integer&at=aliquet&feugiat=massa&non=id&pretium=lobortis&quis=convallis&lectus=tortor&suspendisse=risus",
      price: 561,
      shortDescription:
        "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
      description:
        "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      ratings: 5,
      stock: 54,
      brand: "Extract Vanilla Pure",
    },
    {
      category_id: 3,
      productName: "Chambord Royal",
      image:
        "https://cornell.edu/velit/eu.json?vulputate=eu&elementum=magna&nullam=vulputate&varius=luctus&nulla=cum&facilisi=sociis&cras=natoque&non=penatibus&velit=et&nec=magnis&nisi=dis&vulputate=parturient&nonummy=montes&maecenas=nascetur&tincidunt=ridiculus&lacus=mus&at=vivamus&velit=vestibulum&vivamus=sagittis&vel=sapien&nulla=cum&eget=sociis&eros=natoque&elementum=penatibus&pellentesque=et&quisque=magnis&porta=dis&volutpat=parturient&erat=montes&quisque=nascetur&erat=ridiculus&eros=mus&viverra=etiam&eget=vel&congue=augue&eget=vestibulum&semper=rutrum&rutrum=rutrum&nulla=neque&nunc=aenean&purus=auctor&phasellus=gravida&in=sem&felis=praesent&donec=id&semper=massa&sapien=id&a=nisl&libero=venenatis&nam=lacinia&dui=aenean&proin=sit&leo=amet&odio=justo&porttitor=morbi&id=ut&consequat=odio&in=cras&consequat=mi&ut=pede&nulla=malesuada&sed=in&accumsan=imperdiet&felis=et&ut=commodo&at=vulputate&dolor=justo&quis=in&odio=blandit&consequat=ultrices&varius=enim&integer=lorem&ac=ipsum&leo=dolor&pellentesque=sit&ultrices=amet&mattis=consectetuer&odio=adipiscing&donec=elit&vitae=proin&nisi=interdum&nam=mauris&ultrices=non&libero=ligula&non=pellentesque&mattis=ultrices&pulvinar=phasellus&nulla=id&pede=sapien&ullamcorper=in&augue=sapien&a=iaculis&suscipit=congue&nulla=vivamus&elit=metus&ac=arcu&nulla=adipiscing",
      price: 877,
      shortDescription:
        "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      description:
        "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      ratings: 3,
      stock: 86,
      brand: "Glass - Juice Clear 5oz 55005",
    },
    {
      category_id: 4,
      productName: "Mix - Cocktail Strawberry Daiquiri",
      image:
        "https://google.pl/sit/amet/nulla/quisque/arcu.js?amet=curae&consectetuer=duis&adipiscing=faucibus&elit=accumsan&proin=odio&risus=curabitur&praesent=convallis&lectus=duis&vestibulum=consequat&quam=dui&sapien=nec&varius=nisi&ut=volutpat&blandit=eleifend&non=donec&interdum=ut&in=dolor&ante=morbi&vestibulum=vel&ante=lectus&ipsum=in&primis=quam&in=fringilla&faucibus=rhoncus&orci=mauris&luctus=enim&et=leo&ultrices=rhoncus&posuere=sed&cubilia=vestibulum&curae=sit&duis=amet&faucibus=cursus&accumsan=id&odio=turpis&curabitur=integer&convallis=aliquet&duis=massa&consequat=id&dui=lobortis&nec=convallis&nisi=tortor&volutpat=risus&eleifend=dapibus&donec=augue&ut=vel&dolor=accumsan&morbi=tellus&vel=nisi&lectus=eu&in=orci&quam=mauris&fringilla=lacinia&rhoncus=sapien&mauris=quis&enim=libero&leo=nullam&rhoncus=sit&sed=amet&vestibulum=turpis&sit=elementum&amet=ligula&cursus=vehicula&id=consequat&turpis=morbi&integer=a&aliquet=ipsum&massa=integer&id=a&lobortis=nibh&convallis=in&tortor=quis&risus=justo&dapibus=maecenas&augue=rhoncus&vel=aliquam&accumsan=lacus&tellus=morbi&nisi=quis&eu=tortor&orci=id&mauris=nulla&lacinia=ultrices&sapien=aliquet&quis=maecenas&libero=leo&nullam=odio&sit=condimentum&amet=id&turpis=luctus&elementum=nec",
      price: 213,
      shortDescription:
        "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      description:
        "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      ratings: 3,
      stock: 77,
      brand: "Lamb - Sausage Casings",
    },
    {
      category_id: 6,
      productName: "Spice - Paprika",
      image:
        "https://mtv.com/vel.js?pharetra=quam&magna=pede&ac=lobortis&consequat=ligula&metus=sit&sapien=amet&ut=eleifend&nunc=pede&vestibulum=libero&ante=quis&ipsum=orci&primis=nullam&in=molestie&faucibus=nibh&orci=in&luctus=lectus&et=pellentesque&ultrices=at&posuere=nulla",
      price: 758,
      shortDescription:
        "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      description:
        "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      ratings: 5,
      stock: 2,
      brand: "Cattail Hearts",
    },
    {
      category_id: 4,
      productName: "Chicken - Whole Roasting",
      image:
        "https://ameblo.jp/ante/vivamus/tortor/duis/mattis/egestas/metus.jpg?est=malesuada&lacinia=in&nisi=imperdiet&venenatis=et&tristique=commodo&fusce=vulputate&congue=justo&diam=in&id=blandit&ornare=ultrices&imperdiet=enim&sapien=lorem&urna=ipsum&pretium=dolor&nisl=sit&ut=amet&volutpat=consectetuer&sapien=adipiscing&arcu=elit&sed=proin&augue=interdum&aliquam=mauris&erat=non&volutpat=ligula&in=pellentesque&congue=ultrices&etiam=phasellus&justo=id&etiam=sapien&pretium=in&iaculis=sapien&justo=iaculis&in=congue&hac=vivamus&habitasse=metus&platea=arcu&dictumst=adipiscing&etiam=molestie&faucibus=hendrerit&cursus=at&urna=vulputate&ut=vitae&tellus=nisl&nulla=aenean&ut=lectus&erat=pellentesque&id=eget&mauris=nunc&vulputate=donec&elementum=quis&nullam=orci&varius=eget&nulla=orci&facilisi=vehicula&cras=condimentum&non=curabitur&velit=in&nec=libero&nisi=ut&vulputate=massa&nonummy=volutpat&maecenas=convallis&tincidunt=morbi&lacus=odio&at=odio&velit=elementum&vivamus=eu&vel=interdum&nulla=eu&eget=tincidunt&eros=in&elementum=leo&pellentesque=maecenas&quisque=pulvinar&porta=lobortis&volutpat=est&erat=phasellus&quisque=sit&erat=amet&eros=erat&viverra=nulla&eget=tempus&congue=vivamus&eget=in&semper=felis&rutrum=eu",
      price: 481,
      shortDescription:
        "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      description:
        "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      ratings: 5,
      stock: 90,
      brand: "Glycerine",
    },
    {
      category_id: 4,
      productName: "Cheese - Mozzarella, Shredded",
      image:
        "https://google.ca/vivamus/metus/arcu/adipiscing/molestie.json?elementum=quam&pellentesque=pede&quisque=lobortis&porta=ligula&volutpat=sit&erat=amet&quisque=eleifend&erat=pede&eros=libero&viverra=quis&eget=orci&congue=nullam&eget=molestie&semper=nibh&rutrum=in&nulla=lectus&nunc=pellentesque&purus=at&phasellus=nulla&in=suspendisse&felis=potenti&donec=cras&semper=in&sapien=purus&a=eu&libero=magna&nam=vulputate",
      price: 360,
      shortDescription:
        "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      description:
        "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      ratings: 3,
      stock: 61,
      brand: "Zucchini - Green",
    },
    {
      category_id: 3,
      productName: "Basil - Fresh",
      image:
        "http://qq.com/in.js?rutrum=metus&nulla=arcu&nunc=adipiscing&purus=molestie&phasellus=hendrerit&in=at&felis=vulputate&donec=vitae",
      price: 370,
      shortDescription:
        "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      description:
        "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      ratings: 1,
      stock: 22,
      brand: "Pepsi, 355 Ml",
    },
    {
      category_id: 1,
      productName: "Toamtoes 6x7 Select",
      image:
        "https://go.com/urna/pretium/nisl.json?ut=vel&blandit=pede&non=morbi&interdum=porttitor&in=lorem&ante=id&vestibulum=ligula&ante=suspendisse&ipsum=ornare&primis=consequat&in=lectus&faucibus=in&orci=est&luctus=risus&et=auctor&ultrices=sed&posuere=tristique&cubilia=in&curae=tempus&duis=sit&faucibus=amet&accumsan=sem&odio=fusce&curabitur=consequat&convallis=nulla&duis=nisl&consequat=nunc&dui=nisl&nec=duis&nisi=bibendum&volutpat=felis&eleifend=sed&donec=interdum&ut=venenatis&dolor=turpis&morbi=enim&vel=blandit&lectus=mi&in=in&quam=porttitor&fringilla=pede&rhoncus=justo&mauris=eu&enim=massa&leo=donec&rhoncus=dapibus&sed=duis&vestibulum=at&sit=velit&amet=eu&cursus=est&id=congue&turpis=elementum&integer=in&aliquet=hac&massa=habitasse&id=platea&lobortis=dictumst&convallis=morbi&tortor=vestibulum&risus=velit&dapibus=id&augue=pretium&vel=iaculis&accumsan=diam&tellus=erat&nisi=fermentum&eu=justo&orci=nec&mauris=condimentum&lacinia=neque&sapien=sapien&quis=placerat&libero=ante&nullam=nulla&sit=justo&amet=aliquam&turpis=quis&elementum=turpis&ligula=eget&vehicula=elit",
      price: 353,
      shortDescription:
        "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      description:
        "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      ratings: 3,
      stock: 55,
      brand: "Wine - Sogrape Mateus Rose",
    },
    {
      category_id: 2,
      productName: "Sprouts - China Rose",
      image:
        "http://cbc.ca/mauris/enim/leo/rhoncus/sed/vestibulum.xml?ut=viverra&blandit=diam",
      price: 606,
      shortDescription:
        "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      description:
        "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      ratings: 3,
      stock: 43,
      brand: "Beef - Striploin Aa",
    },
    {
      category_id: 2,
      productName: "Artichokes - Jerusalem",
      image:
        "http://ycombinator.com/ut/at/dolor/quis.xml?vehicula=eu&consequat=massa&morbi=donec&a=dapibus&ipsum=duis&integer=at&a=velit&nibh=eu&in=est&quis=congue&justo=elementum&maecenas=in&rhoncus=hac&aliquam=habitasse&lacus=platea&morbi=dictumst&quis=morbi&tortor=vestibulum&id=velit&nulla=id&ultrices=pretium&aliquet=iaculis&maecenas=diam&leo=erat&odio=fermentum&condimentum=justo&id=nec&luctus=condimentum&nec=neque&molestie=sapien&sed=placerat&justo=ante&pellentesque=nulla&viverra=justo&pede=aliquam&ac=quis&diam=turpis&cras=eget&pellentesque=elit&volutpat=sodales&dui=scelerisque&maecenas=mauris&tristique=sit&est=amet&et=eros&tempus=suspendisse&semper=accumsan&est=tortor&quam=quis&pharetra=turpis&magna=sed&ac=ante&consequat=vivamus&metus=tortor&sapien=duis&ut=mattis&nunc=egestas&vestibulum=metus&ante=aenean&ipsum=fermentum&primis=donec&in=ut&faucibus=mauris&orci=eget&luctus=massa&et=tempor&ultrices=convallis&posuere=nulla&cubilia=neque",
      price: 517,
      shortDescription:
        "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      description:
        "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      ratings: 3,
      stock: 65,
      brand: "Muffin Mix - Corn Harvest",
    },
    {
      category_id: 5,
      productName: "Prunes - Pitted",
      image:
        "http://delicious.com/duis/bibendum/morbi/non/quam.xml?posuere=cras&metus=mi&vitae=pede&ipsum=malesuada&aliquam=in&non=imperdiet&mauris=et&morbi=commodo&non=vulputate&lectus=justo&aliquam=in&sit=blandit&amet=ultrices&diam=enim&in=lorem&magna=ipsum&bibendum=dolor&imperdiet=sit&nullam=amet&orci=consectetuer&pede=adipiscing&venenatis=elit&non=proin&sodales=interdum&sed=mauris&tincidunt=non&eu=ligula&felis=pellentesque&fusce=ultrices&posuere=phasellus&felis=id&sed=sapien&lacus=in&morbi=sapien&sem=iaculis&mauris=congue&laoreet=vivamus&ut=metus&rhoncus=arcu&aliquet=adipiscing&pulvinar=molestie&sed=hendrerit&nisl=at&nunc=vulputate&rhoncus=vitae&dui=nisl&vel=aenean&sem=lectus&sed=pellentesque&sagittis=eget&nam=nunc&congue=donec&risus=quis&semper=orci&porta=eget&volutpat=orci&quam=vehicula&pede=condimentum&lobortis=curabitur&ligula=in&sit=libero&amet=ut&eleifend=massa&pede=volutpat&libero=convallis&quis=morbi&orci=odio&nullam=odio&molestie=elementum&nibh=eu&in=interdum&lectus=eu&pellentesque=tincidunt&at=in&nulla=leo&suspendisse=maecenas",
      price: 991,
      shortDescription:
        "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      description:
        "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      ratings: 2,
      stock: 19,
      brand: "Pimento - Canned",
    },
    {
      category_id: 6,
      productName: "Red Snapper - Fresh, Whole",
      image:
        "https://aol.com/consequat/varius/integer/ac/leo/pellentesque/ultrices.png?nullam=ac&orci=leo&pede=pellentesque&venenatis=ultrices&non=mattis&sodales=odio&sed=donec&tincidunt=vitae&eu=nisi&felis=nam&fusce=ultrices&posuere=libero&felis=non&sed=mattis&lacus=pulvinar&morbi=nulla&sem=pede&mauris=ullamcorper&laoreet=augue&ut=a&rhoncus=suscipit&aliquet=nulla&pulvinar=elit&sed=ac&nisl=nulla&nunc=sed&rhoncus=vel&dui=enim&vel=sit&sem=amet&sed=nunc&sagittis=viverra&nam=dapibus&congue=nulla&risus=suscipit&semper=ligula&porta=in&volutpat=lacus&quam=curabitur&pede=at&lobortis=ipsum&ligula=ac&sit=tellus&amet=semper&eleifend=interdum&pede=mauris&libero=ullamcorper&quis=purus&orci=sit&nullam=amet&molestie=nulla&nibh=quisque&in=arcu&lectus=libero&pellentesque=rutrum&at=ac&nulla=lobortis&suspendisse=vel&potenti=dapibus&cras=at&in=diam&purus=nam",
      price: 33,
      shortDescription:
        "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      description:
        "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      ratings: 3,
      stock: 95,
      brand: "V8 - Tropical Blend",
    },
    {
      category_id: 1,
      productName: "Wine - Clavet Saint Emilion",
      image:
        "https://psu.edu/dictumst/aliquam/augue.jsp?amet=rutrum&cursus=nulla&id=nunc&turpis=purus&integer=phasellus&aliquet=in&massa=felis&id=donec&lobortis=semper&convallis=sapien&tortor=a&risus=libero&dapibus=nam&augue=dui&vel=proin&accumsan=leo&tellus=odio&nisi=porttitor&eu=id&orci=consequat&mauris=in&lacinia=consequat&sapien=ut&quis=nulla&libero=sed&nullam=accumsan&sit=felis&amet=ut&turpis=at&elementum=dolor&ligula=quis&vehicula=odio&consequat=consequat&morbi=varius&a=integer&ipsum=ac&integer=leo&a=pellentesque&nibh=ultrices&in=mattis&quis=odio&justo=donec&maecenas=vitae&rhoncus=nisi&aliquam=nam&lacus=ultrices&morbi=libero&quis=non&tortor=mattis&id=pulvinar&nulla=nulla&ultrices=pede&aliquet=ullamcorper&maecenas=augue&leo=a&odio=suscipit&condimentum=nulla&id=elit&luctus=ac&nec=nulla&molestie=sed&sed=vel&justo=enim&pellentesque=sit&viverra=amet&pede=nunc&ac=viverra&diam=dapibus&cras=nulla&pellentesque=suscipit&volutpat=ligula&dui=in&maecenas=lacus&tristique=curabitur&est=at&et=ipsum&tempus=ac&semper=tellus&est=semper&quam=interdum&pharetra=mauris&magna=ullamcorper&ac=purus&consequat=sit&metus=amet&sapien=nulla&ut=quisque&nunc=arcu&vestibulum=libero&ante=rutrum&ipsum=ac&primis=lobortis&in=vel&faucibus=dapibus",
      price: 750,
      shortDescription:
        "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      description:
        "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      ratings: 3,
      stock: 18,
      brand: "Eggwhite Frozen",
    },
    {
      category_id: 5,
      productName: "Wine La Vielle Ferme Cote Du",
      image:
        "http://artisteer.com/nisi/nam/ultrices.js?nulla=pede&quisque=posuere",
      price: 521,
      shortDescription:
        "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      description:
        "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      ratings: 4,
      stock: 89,
      brand: "Hickory Smoke, Liquid",
    },
  ]);
  // });
};
