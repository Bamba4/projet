from django.shortcuts import render

# Create your views here.

def index(request):
	return render(request , 'legums/allProduis.html')

def detail_produit(request):
	return render(request , 'legums/prduits_details.html')
