gen_widget:
	sh ./gen_widget.sh

gen_page:
	sh ./gen_page.sh

gen_service:
	sh ./gen_service.sh

dev:
	npm run build_dev
	firebase deploy --only hosting:frontend-costumer-dev

staging:
	npm run build_staging
	firebase deploy --only hosting:frontend-costumer-staging

prod:
	npm run build_prod
	firebase deploy --only hosting:frontend-costumer