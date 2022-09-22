-- Queue all progress tasks to prevent infinite loops and overlap
local state = false

function ToggleUI()
    state = not state
    SendNUIMessage({
        type = 'toggle',
        visible = state,
    })
end

RegisterNUICallback('updatestate', function(args, nuicb)
    state = args.state
    SetNuiFocus(state, state)
    print('State change received!', state)

    nuicb('ok')
end)

RegisterCommand("toggleUI", function(source, args, rawCommand)
    ToggleUI()
end, false)
