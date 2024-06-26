from django.shortcuts import render, redirect
from .forms import UserForm
from .models import User

def home(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            user = form.save()
            return redirect('greeting', user_id=user.id)
    else:
        form = UserForm()
    return render(request, 'case5_app/home.html', {'form': form})

def greeting(request, user_id):
    user = User.objects.get(pk=user_id)
    return render(request, 'case5_app/greeting.html', {'user': user})