select * from listings
left join images on listings.id = images.listings_id
where listings.id = $1; 