gen_widget:
	sh ./gen_widget.sh

gen_page:
	sh ./gen_page.sh

gen_service:
	sh ./gen_service.sh

dev:
	yarn build_dev
	firebase deploy --only hosting:frontend-costumer-dev

staging:
	yarn build_staging
	firebase deploy --only hosting:frontend-costumer-staging

prod:
	yarn build_prod
	firebase deploy --only hosting:frontend-costumer